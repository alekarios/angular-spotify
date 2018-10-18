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

  private track: string;

  private artistName: string;

  private trackImage: string;

  private description1: string;

  private description2: string;

  constructor(private activateRoute: ActivatedRoute, private musicService: ArtistService, private youtubeService: YoutubeService,
    private satinizer: DomSanitizer) { }

  ngOnInit() {

    this.track = this.activateRoute.snapshot.params['trackName'];
    this.artistName = this.activateRoute.snapshot.params['artistName'];
    console.log(this.track, this.artistName);

    this.youtubeService.getVideo(this.track + this.artistName).subscribe((youtubeData) => {
      const videoId = youtubeData.json().items[0].id.videoId;
      this.url = this.satinizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    });

    this.youtubeService.getTrackInfo(this.artistName, this.track).subscribe((data) => {
      console.log((data.json().items[0]).snippet.publishedAt);
      this.trackImage = data.json().items[0].snippet.thumbnails.high['url'];
      this.description1 = data.json().items[0].snippet.channelTitle;
      this.description2 = (data.json().items[0].snippet.publishedAt).substring(-1, 10);
      console.log(this.trackImage);
    });
  }

}
