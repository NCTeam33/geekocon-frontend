import { Component, OnInit } from '@angular/core';
import { FestService } from '../fest.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Zone } from '../_model/zone.model';
@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.less']
})
export class ZonesComponent implements OnInit {

  zones: Zone[];
  constructor(private fest: FestService) { }

  ngOnInit(): void {
    const zone$ = this.fest.getEntertainment().pipe(
      map(results => {
        this.zones = results;
      }),
      catchError(error => {
        console.log(error);
        return of([]);
      })
    );
  }

}
