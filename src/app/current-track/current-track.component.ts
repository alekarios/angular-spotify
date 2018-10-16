import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../music-services/artist.service';
import { YoutubeService } from '../music-services/youtube.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-current-track',
  templateUrl: './current-track.component.html',
  styleUrls: ['./current-track.component.css']
})
export class CurrentTrackComponent implements OnInit {

  private url: SafeResourceUrl;

  constructor(private activateRoute: ActivatedRoute, private musicService: ArtistService, private youtubeService: YoutubeService,
    private satinizer: DomSanitizer) { }

  ngOnInit() {

    const track = this.activateRoute.snapshot.params['trackName'];
    const artistName = this.activateRoute.snapshot.params['artistName'];
    console.log(track, artistName);

    this.youtubeService.getVideo(track + artistName).subscribe((youtubeData) => {
      const videoId = youtubeData.json().items[0].id.videoId;
      this.url = this.satinizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    });

  }

}
