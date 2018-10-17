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
  private token = 'BQDCeOu8rWC4r5TgiDk_rEgj7lxF14Jajd7vui7UhV0uVGwTcn8t2EM9z8LzLym3j7zke7BPK6e5dhp-UOlq0ubjHYnFbgTed4Wyq10ENZbCxI7rK6xQ8M66oQgekGGHXqQP3Tswtf_afkE_9Tej1QBkRs3PjBdt-EtxhOT6qMI4tSO7-O8';

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
