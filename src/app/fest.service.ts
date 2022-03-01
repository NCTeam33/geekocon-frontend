import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entertainment, Information } from './_model';
import { environment as env } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FestService {

  constructor(private http: HttpClient) { }

  getEntertainment(): Observable<Entertainment[]> {
    const uri = `${env.api_host}/v1/entertainment`;
    return this.http.get<Entertainment[]>(uri);
  }

  getInformation(): Observable<Information[]> {
    const uri = `${env.api_host}/v1/information`;
    return this.http.get<Information[]>(uri);
  }

}
