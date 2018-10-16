import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgForm, FormControl } from '@angular/forms';
import { ArtistService } from '../music-services/artist.service';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

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

  constructor(public activateRouter: ActivatedRoute, private _artistService: ArtistService,  private route: Router) {

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
      console.log(this.trackByArtist);
    });
    if (this.check === true) {
      this.trackByArtist = [];
    }


  }

  private onClickTrack(event) {

    this.track = (event.currentTarget).innerHTML;
    this.route.navigate(['/track/', this.track, this.currentArtist]);
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

  }




}
