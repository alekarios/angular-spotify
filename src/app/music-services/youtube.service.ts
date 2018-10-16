import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { getComponentViewDefinitionFactory } from '@angular/core/src/view';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeAPIKey = 'AIzaSyC7XvQpUStvUCYZ1A53zIN0vPA-vteEuQo';



  constructor(private http: Http) { }




  getVideo(search: string): Observable<any> {

    // tslint:disable-next-line:max-line-length
    return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=10&q=${search}&type=video&key=${this.youtubeAPIKey}`);
  }
}


