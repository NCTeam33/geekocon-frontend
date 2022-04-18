import { Component, OnInit } from '@angular/core';
import { FestService } from '../fest.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Zone } from '../_model/zone.model';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.less']
})

export class ZonesComponent implements OnInit {
  _roles: string[];
  zones: Zone[];
  constructor(private fest: FestService, private app: AppComponent) { }

  ngOnInit(): void {
    this.getRoles();
    /*const zone$ = this.fest.getZones().pipe(
      map(results => {
        this.zones = results;
      }),
      catchError(error => {
        console.log(error);
        return of([]);
      })
    );*/
  }
  getRoles() {
    this._roles = this.app.getRoles();
  }
}
