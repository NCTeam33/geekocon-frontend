import { Component, OnInit } from '@angular/core';
import { FestService } from '../fest.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Zone } from '../_model/zone.model';
import { ZoneType } from '../_model/zone.type.model';
import {AppComponent} from '../app.component';
import {DialogComponent} from './dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { DialogZoneTypeComponent } from './dialog-zone-type/dialog-zone-type.component';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.less']
})

export class ZonesComponent implements OnInit {
  _roles: string[];
  breakpoint: number;
  singleZone: Zone;
  zoneType : ZoneType;
  zones: Zone[] = [];/*[
    {name: 'Nintendo', type_id: {name: 'Games', id: 1}, contributor_id:1243124, description: 'Nintendo — японская компания, специализирующаяся на создании видеоигр и игровых систем, со штаб-квартирой в Киото. Компания была основана в 1889 году ремесленником Фусадзиро Ямаути под названием Nintendo Karuta и первоначально производила игральные карты ручной работы «ханафуда».', available_ticket_amount: 5, total_tickets_amount:150},
    {name: 'Nintendo', type_id: {name: 'Games', id: 1}, contributor_id:1243124, description: 'Nintendo — японская компания, специализирующаяся на создании видеоигр и игровых систем, со штаб-квартирой в Киото. Компания была основана в 1889 году ремесленником Фусадзиро Ямаути под названием Nintendo Karuta и первоначально производила игральные карты ручной работы «ханафуда».', available_ticket_amount: 5, total_tickets_amount:150},
    {name: 'Nintendo', type_id: {name: 'Games', id: 1}, contributor_id:1243124, description: 'Nintendo — японская компания, специализирующаяся на создании видеоигр и игровых систем, со штаб-квартирой в Киото. Компания была основана в 1889 году ремесленником Фусадзиро Ямаути под названием Nintendo Karuta и первоначально производила игральные карты ручной работы «ханафуда».', available_ticket_amount: 5, total_tickets_amount:150},
    {name: 'Nintendo', type_id: {name: 'Games', id: 1}, contributor_id:1243124, description: 'Nintendo — японская компания, специализирующаяся на создании видеоигр и игровых систем, со штаб-квартирой в Киото. Компания была основана в 1889 году ремесленником Фусадзиро Ямаути под названием Nintendo Karuta и первоначально производила игральные карты ручной работы «ханафуда».', available_ticket_amount: 5, total_tickets_amount:150},
    {name: 'Nintendo', type_id: {name: 'Games', id: 1}, contributor_id:1243124, description: 'Nintendo — японская компания, специализирующаяся на создании видеоигр и игровых систем, со штаб-квартирой в Киото. Компания была основана в 1889 году ремесленником Фусадзиро Ямаути под названием Nintendo Karuta и первоначально производила игральные карты ручной работы «ханафуда».', available_ticket_amount: 5, total_tickets_amount:150},
    {name: 'Nintendo', type_id: {name: 'Games', id: 1}, contributor_id:1243124, description: 'Nintendo — японская компания, специализирующаяся на создании видеоигр и игровых систем, со штаб-квартирой в Киото. Компания была основана в 1889 году ремесленником Фусадзиро Ямаути под названием Nintendo Karuta и первоначально производила игральные карты ручной работы «ханафуда».', available_ticket_amount: 5, total_tickets_amount:150}
  ];*/
  constructor(private fest: FestService, private app: AppComponent, private dialog: MatDialog, private dzt: MatDialog) {
  }

  ngOnInit(): void {
    this.getRoles();
    this.breakpoint =
      (window.innerWidth <= 650) ? 1 : (window.innerWidth <= 970) ? 2 : (window.innerWidth <= 1050) ? 3 : 3;
    this.getZones();
  }

  deleteZone() {
    //this.fest.deleteZone()
  }

  addZoneType() {
    const dialForAdd = this.dzt.open(DialogZoneTypeComponent, {
      data: {
        name: this.zoneType.name
      },
    });

    dialForAdd.afterClosed().subscribe(result => {
      console.log("Zone type successfully added");
      this.fest.addZoneType(result);
    })
  }
  getZones() {
    const zone$ = this.fest.getTestZones().pipe
    (
      map(results => {
        this.zones = results;
      })
    );
    zone$.subscribe(data => data);
  }

  getRoles() {
    this._roles = this.app.getRoles();
  }

  openDialogForAdd() {
    const dialForAdd = this.dialog.open(DialogComponent, {
      data: {
        name: this.singleZone.name, typeName: this.singleZone.type.name, contributorId: this.singleZone.contributorId, description: this.singleZone.description,
        availableTicketAmount: this.singleZone.availableTicketAmount, totalTicketAmount: this.singleZone.totalTicketsAmount
      },
    });

    dialForAdd.afterClosed().subscribe(result => {
      console.log("Zone successfully added");
      this.fest.addZone(result);
    })
  }
    openDialogForEditing()
    {
      const dialForEdit = this.dialog.open(DialogComponent, {
        data: {
          name: this.singleZone.name, typeName: this.singleZone.type.name, contributorId: this.singleZone.contributorId, description: this.singleZone.description,
          availableTicketAmount: this.singleZone.availableTicketAmount, totalTicketAmount: this.singleZone.totalTicketsAmount
        },
      });

      dialForEdit.afterClosed().subscribe(result => {
        console.log("Zone successfully edited");
        this.fest.addZone(result);
      })
    }

  onResize(event) {
    this.breakpoint =
      (event.target.innerWidth <= 650) ? 1
        : (event.target.innerWidth <= 970) ? 2
          : (event.target.innerWidth <= 1050) ? 3 : 3;
  }
}
