import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ArtistService } from '../music-services/artist.service';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  private currentUser: string;

  private artists: any [] = [];

  private trackByArtist: Array<object> = [];

  artistFilteredOptions: Observable<string[]>;

  private search: FormControl = new FormControl();

  private check = false;

  private track = '';

  private currentArtist = '';

  private newReleases: Array<object> = [];

  private selectedAlbumId: SafeResourceUrl;

  // tslint:disable-next-line:max-line-length
  constructor(public activateRouter: ActivatedRoute, private _artistService: ArtistService,  private route: Router, private satinizer: DomSanitizer) {

   }

   private _filter(value: string): string[] {

    return this.artists.filter(artist => artist.toLowerCase().includes(value));
  }

  private onArtistSelected(selectedArtist) {
    this.check = true;
    this.currentArtist = selectedArtist;
    this._artistService.getSpotify(selectedArtist).subscribe((spotifyData) => {
      for (let i = 0; i < (spotifyData.tracks.items).length; i++) {
        this.trackByArtist.push(
          {name: spotifyData.tracks.items[i].name, image: spotifyData.tracks.items[i].album.images[1].url}
           );
      }
    });
    if (this.check === true) {
      this.trackByArtist = [];
    }


  }

  private onClickTrack(event) {

    this.track = (event.currentTarget).innerHTML;
    this.route.navigate(['/track/', this.track, this.currentArtist]);
  }

  private onSelectedNewRelease(albumId) {
    this.selectedAlbumId =  this.satinizer.bypassSecurityTrustResourceUrl(`https://open.spotify.com/embed/album/${albumId}`);
  }


  ngOnInit()   {

    // track user id
     const id = this.activateRouter.snapshot.params['id'];
     this.currentUser = id;

    this.search.valueChanges.subscribe((data) => {
      this._artistService.getSpotify(data).subscribe((spotifyData) => {
        (spotifyData.artists.items).map((el) => {
          this.artists.push(el.name);
        });
      });
    });

     this.artistFilteredOptions = this.search.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this._artistService.getNewReleases().subscribe((newReleases) => {
        (newReleases.albums.items).map((el) => {
          this.newReleases.push(
            {url: el.images[1].url, id: el.id}
          );
        });
      });
      console.log(this.newReleases);
  }




}
