import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Zone} from './_model/zone.model';
import {Tickets} from './_model/tickets.model';
import {Contributor} from './_model/contributor.model';

@Injectable({
  providedIn: 'root'
})
export class FestService {

  constructor(private http: HttpClient) { }

  getEntertainment(): Observable<Zone[]> {
    const uri = `${env.api_host}/v1/zone`;
    return this.http.get<Zone[]>(uri);
  }

  getTickets(): Observable<Tickets[]> {
    const uri = `${env.api_host}/v1/tickets`;
    return this.http.get<Tickets[]>(uri);
  }

  getContributors(): Observable<Contributor[]> {
    const uri = `${env.api_host}/v1/contributors`;
    return this.http.get<Contributor[]>(uri);
  }

}
