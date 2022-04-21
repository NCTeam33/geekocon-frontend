import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Zone} from './_model/zone.model';
import {ZoneType} from './_model/zone.type.model';

@Injectable({
  providedIn: 'root'
})
export class FestService {

  constructor(private http: HttpClient) { }

  getTestZones(): Observable<Zone[]> {
    const uri = `${env.api_host}/zones/test`;
    return this.http.get<Zone[]>(uri);
  }

  getZones(): Observable<Zone[]> {
    const uri = `${env.api_host}/zones`;
    return this.http.get<Zone[]>(uri);
  }

  getZonesTypes(): Observable<ZoneType[]> {
    const uri = `${env.api_host}/zones/types`;
    return this.http.get<ZoneType[]>(uri);
  }

  getZonesByType(id : number): Observable<Zone[]> {
    const uri = `${env.api_host}/zones?type=${id}`;
    return this.http.get<Zone[]>(uri);
  }

  addZoneType(ZoneType : ZoneType) {
    const uri = `${env.api_host}/zones/types`;
    return this.http.post<ZoneType>(uri, ZoneType);
  }

  addZone(Zone : Zone) {
    const uri = `${env.api_host}/zones`;
    return this.http.post<Zone>(uri, Zone);
  }

  deleteZoneType(id : number) {
    const uri = `${env.api_host}/zones/types/${id}`;
    return this.http.delete(uri);
  }
  
  deleteZone(id : number) {
    const uri = `${env.api_host}/zones/${id}`;
    return this.http.delete(uri);
  }

}
