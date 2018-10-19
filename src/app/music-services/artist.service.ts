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
  private token = 'BQBteBKfr5BsmZ5kXsZODkJSPHLqBPTITxCwkNdSWEE0srZUroXXxCvTkyYeOqWE51UhsgIc2bwB56r40-FaGb5gzkQ78av1MbzzZ0R_NkK3brOvctx0xEG1dmwdetYIN3XOurBPzcC68YUjfvoSLC5DZZCc7jwXquDhA5u4vNALY8sxbVoCozgZ';

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
