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
  private token = 'BQCWbODzZto-HuQXky_fgFPj65vM8jzjYMX_gGBwULzhO7YRMhrHstdEWjbwWMGdsKGcQhqqSa9mWXEjSUS273K_aXpNXemJpD2Zt_m3cvhluCy8_Fis-n1gaY3fwDMuzld8nSuqfRZW8l8ehCioNu9zuoWujS-oJEIyRFYhc9ywP7XdwVM';

  private header = new HttpHeaders(
    {'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`,
    }
    );


  constructor(private _http: HttpClient) { }

  getSpotify(artist): Observable<any> {

    return this._http.get<any>(`https://api.spotify.com/v1/search?q=${artist}&type=track%2Cartist`, {headers: this.header});
  }

}
