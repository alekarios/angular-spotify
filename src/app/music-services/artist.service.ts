import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private api_key = '4e53aea22e9246268b35c73708b470e6';

  // tslint:disable-next-line:max-line-length
  private token = 'BQDjRC9StTqFOfkUBvRNwYCtxK-DJbLmeFt43jnSxIBl_TJIDqOeXv61w35gHxerWNgnZ43s3Bcgx-h7Chap7YWIDRFUS-6VQHKbWyC-J0_2ugT4AZVjJTu5v79FR5qIrWNX-GiU04YMtWFSDYG8pdpSN3TOM21KJsCzqGF89vQ8T3xZV4y1sWsP';

  private spotifyHeader = new HttpHeaders(
    {'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`,
    }
    );


  constructor(private _http: HttpClient) { }

  getSpotify(artist): Observable<any> {

    return this._http.get<any>(`https://api.spotify.com/v1/search?q=${artist}&type=track%2Cartist`, {headers: this.spotifyHeader});
  }

  getNewReleases () {
    return this._http.get<any>('https://api.spotify.com/v1/browse/new-releases', {headers: this.spotifyHeader});
  }


}
