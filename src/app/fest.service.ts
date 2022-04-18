import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Zone} from './_model/zone.model';

@Injectable({
  providedIn: 'root'
})
export class FestService {

  constructor(private http: HttpClient) { }

  getZones(): Observable<Zone[]> {
    const uri = `${env.api_host}/v1/zone`;
    return this.http.get<Zone[]>(uri);
  }

}
