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
  private token = 'BQC1kYbyGw8HKfnDPp9hAztcgLcBjhTWVKu8yzbsAUyQlcIW0MDx60X2wlB_RgXOw9uAfPzt1JoP4FrCJIk4B5M3ctTUwyDQXlJA2L_AqbaQGcC95epz5XKrCi_7NFcOu8x7DyRlaP5AakoclipBGJj5CMYz2RHmAQLlfbxR3d8qwPd7HK4';

  private spotifyHeader = new HttpHeaders(
    {'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`,
    }
    );


  constructor(private _http: HttpClient) { }

  getSpotify(artist): Observable<any> {

    return this._http.get<any>(`https://api.spotify.com/v1/search?q=${artist}&type=track%2Cartist`, {headers: this.spotifyHeader});
  }


}
