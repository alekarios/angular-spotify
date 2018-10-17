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
  private token = 'BQCK5A-ttXSYAe_N7Un5S2U16cYloNx-uizNZYWCXyVkEEkdyvYaHHcpJFxwRBh0Ppt5cJkWCKxgCnaY2EgANB-gEpk7sBbZxvtSjXSp7GOHZTcSe9t9djZjmDNLyGNAanihKtrr4sPvAbQuiri4fLLjYOvXsXJCU_r9L4M-EmrQZRnBjto';

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
