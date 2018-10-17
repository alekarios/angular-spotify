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
  private token = 'BQArAfRLwwQKwuYZP-Z_hUBgn95dsxYZ8LXiyOHnxSDdB9aqcZKwjzLIFTjQaqZKekHL5AtyBuK55-VrGn85m-j7lQHYrSs6AehBrBg3Sl4tKcpVN2YjFfejigz8bOW1Aa6xpGkegYnSs0xzpedsw0rtUWhPDaKYFofGZZbtRNXu4oA3J10';

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
