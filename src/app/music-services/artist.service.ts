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
  private token = 'BQDcKfJVnoHjra_734j6SUr06qo-g6JYhZkq-08kn5mBdxCfhPjC-JTBNiiI2RVrTtFygMJCn6LLcdCNvQehtLR-eW-JAxzAahrWGbF-PMv5Cjx92j9hDcYWKsMB_i12N7q20XyJwxi-vz1z46j0SXkEkzOt9Yut2zLfJBvwSUOrE56WRcs';

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
