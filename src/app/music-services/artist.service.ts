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
  private token = 'BQArC_rIAYL8mEsz9Cii6XeUEl6SEZqVSX7Lp6uF7RizDj2_k_AkzlhQyNZQjhxeZretKMkCPn-ids6K8iXNOzpV8jz3NOzs_lp02YTqFj1FR1IHX8Fu1qDx_Bwgz6gqLTtrkt0i2T079Bin0Tt8lS9XtLBwiQLtZbivlF7eg5qED7Ynzs0';

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
