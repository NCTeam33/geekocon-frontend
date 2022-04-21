import { Component, OnInit } from '@angular/core';
import { FestService } from '../fest.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Zone } from '../_model/zone.model';
import {AppComponent} from '../app.component';
import {DialogComponent} from './dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.less']
})

export class ZonesComponent implements OnInit {
  _roles: string[];
  breakpoint: number;
  zones: Zone[] = [
    {name: 'Nintendo', type_id: {name: 'Games', id: 1}, contributor_id:1243124, description: 'Nintendo — японская компания, специализирующаяся на создании видеоигр и игровых систем, со штаб-квартирой в Киото. Компания была основана в 1889 году ремесленником Фусадзиро Ямаути под названием Nintendo Karuta и первоначально производила игральные карты ручной работы «ханафуда».', available_ticket_amount: 5, total_tickets_amount:150},
    {name: 'Nintendo', type_id: {name: 'Games', id: 1}, contributor_id:1243124, description: 'Nintendo — японская компания, специализирующаяся на создании видеоигр и игровых систем, со штаб-квартирой в Киото. Компания была основана в 1889 году ремесленником Фусадзиро Ямаути под названием Nintendo Karuta и первоначально производила игральные карты ручной работы «ханафуда».', available_ticket_amount: 5, total_tickets_amount:150},
    {name: 'Nintendo', type_id: {name: 'Games', id: 1}, contributor_id:1243124, description: 'Nintendo — японская компания, специализирующаяся на создании видеоигр и игровых систем, со штаб-квартирой в Киото. Компания была основана в 1889 году ремесленником Фусадзиро Ямаути под названием Nintendo Karuta и первоначально производила игральные карты ручной работы «ханафуда».', available_ticket_amount: 5, total_tickets_amount:150},
    {name: 'Nintendo', type_id: {name: 'Games', id: 1}, contributor_id:1243124, description: 'Nintendo — японская компания, специализирующаяся на создании видеоигр и игровых систем, со штаб-квартирой в Киото. Компания была основана в 1889 году ремесленником Фусадзиро Ямаути под названием Nintendo Karuta и первоначально производила игральные карты ручной работы «ханафуда».', available_ticket_amount: 5, total_tickets_amount:150},
    {name: 'Nintendo', type_id: {name: 'Games', id: 1}, contributor_id:1243124, description: 'Nintendo — японская компания, специализирующаяся на создании видеоигр и игровых систем, со штаб-квартирой в Киото. Компания была основана в 1889 году ремесленником Фусадзиро Ямаути под названием Nintendo Karuta и первоначально производила игральные карты ручной работы «ханафуда».', available_ticket_amount: 5, total_tickets_amount:150},
    {name: 'Nintendo', type_id: {name: 'Games', id: 1}, contributor_id:1243124, description: 'Nintendo — японская компания, специализирующаяся на создании видеоигр и игровых систем, со штаб-квартирой в Киото. Компания была основана в 1889 году ремесленником Фусадзиро Ямаути под названием Nintendo Karuta и первоначально производила игральные карты ручной работы «ханафуда».', available_ticket_amount: 5, total_tickets_amount:150}
  ];
  constructor(private fest: FestService, private app: AppComponent, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getRoles();
    this.breakpoint =
      (window.innerWidth <= 650) ? 1 : (window.innerWidth <= 970) ? 2 : (window.innerWidth <= 1050) ? 3 : 3;
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

  openDialog(){
    this.dialog.open(DialogComponent);
  }

  onResize(event) {
    this.breakpoint =
      (event.target.innerWidth <= 650) ? 1
        : (event.target.innerWidth <= 970) ? 2
          : (event.target.innerWidth <= 1050) ? 3 : 3;
  }
}
