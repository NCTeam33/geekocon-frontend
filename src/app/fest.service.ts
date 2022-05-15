import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment as env } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Zone} from './_model/zone.model';
import {ZoneType} from './_model/zone.type.model';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FestService {

  constructor(private http: HttpClient) { }

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

  addZoneType(zoneType : ZoneType): Observable<ZoneType> {
    const uri = `${env.api_host}/zones/types`;
    return this.http.post<ZoneType>(uri, zoneType);
  }

  addZone(Zone : Zone): Observable<Zone>{
    const uri = `${env.api_host}/zones`;
    return this.http.post<Zone>(uri, Zone);
  }

  deleteZoneType(id : number) : Observable<Response>{
    const uri = `${env.api_host}/zones/types/${id}`;
    return this.http.delete<Response>(uri);
  }

  deleteZone(id : number) : Observable<any>{
    const uri = `${env.api_host}/zones/${id}`;
    return this.http.delete(uri);
  }

  editZone(id: number, zone: Zone) : Observable<Zone>{
    const uri = `${env.api_host}/zones/${id}`;
    return this.http.put<Zone>(uri, zone);
  }

  editZoneType(id: number, zoneType: ZoneType) : Observable<ZoneType>{
    const uri = `${env.api_host}/zones/types/${id}`;
    return this.http.put<ZoneType>(uri, zoneType);
  }

}
