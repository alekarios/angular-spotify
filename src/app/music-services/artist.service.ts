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
  private token = 'BQANiMFV3waX7vS90xVCwdiqoRuR3vGD0pSIyUiT8vQe0vqsTBHyEUMLISh_hwchFn5r1Oa5haoBwyodoiBU4APFPaCp8BazLkDJ_0Ctkk7EHmzyYxt9ZSn4uaVhOpgomS3jsjT5_7EDfLTdA2VLjI-iAGZhA1ClfTMLorH2ZXxl1pHZR0w';

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
