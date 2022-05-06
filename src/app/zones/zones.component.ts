import { Component, OnInit } from '@angular/core';
import { FestService } from '../fest.service';
import { map, catchError } from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import { Zone } from '../_model/zone.model';
import { ZoneType } from '../_model/zone.type.model';
import {AppComponent} from '../app.component';
import {DialogComponent} from './dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { DialogZoneTypeComponent } from './dialog-zone-type/dialog-zone-type.component';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {BottomSheetComponent} from './bottom-sheet/bottom-sheet.component';
import {types} from '@angular/compiler-cli/linker/babel/src/babel_core';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.less']
})

export class ZonesComponent implements OnInit {
  _roles: string[];
  zones: Zone[];
  zoneTypes: ZoneType[];
  breakpoint: number;
  singleZone: Zone;
  zoneType : ZoneType;
  zoneName: string;
  contributorId: number;
  description: string;
  ata: number;
  tta: number;
  zoneTypeName: string;
  zoneTypeId: number;
  constructor(private fest: FestService, private app: AppComponent, private dialogForZones: MatDialog, private dialogForZoneTypes: MatDialog, private zoneTypeSheet: MatBottomSheet) {
  }

  ngOnInit(): void {
    this.getRoles();
    this.breakpoint =
      (window.innerWidth <= 650) ? 1 : (window.innerWidth <= 970) ? 2 : (window.innerWidth <= 1050) ? 3 : 3;
    this.getZones();
    this.getZoneTypes();
  }

  deleteZone(zone: Zone) {
    this.fest.deleteZone(zone.id).subscribe();
  }

  addZoneType() {
    const dialForAdd = this.dialogForZoneTypes.open(DialogZoneTypeComponent, {
      data: {
        name: this.zoneTypeName
      },
    });

    dialForAdd.afterClosed().subscribe(result => {
      console.log("Zone type successfully added");
      let buff: ZoneType = new ZoneType(result);
      const zoneType$ = this.fest.addZoneType(buff).pipe(
        map(result => {
          this.zoneType = result;
        })
      );
      zoneType$.subscribe(data => data);
    })
  }
  getZones() {
    this.fest.getZones().subscribe(zones => this.zones = zones);
  }

  getZoneTypes() {
    this.fest.getZonesTypes().subscribe(zoneTypes => this.zoneTypes = zoneTypes);
  }

  getRoles() {
    this._roles = this.app.getRoles();
  }

  openBottomSheet() {
    this.zoneTypeSheet.open(BottomSheetComponent, {
      data: {
        types: this.zoneTypes,
      }
    });
  }

  openDialogForAdd() {
    const dialForAdd = this.dialogForZones.open(DialogComponent, {
      data: {
        zone: {
          type: {
            name: this.zoneTypeName, id: this.zoneTypeId,
          },
          contributorId: this.contributorId, description: this.description,
          totalTicketAmount: this.tta, availableTicketAmount: this.ata, name: this.zoneName
        }
      },
    });
    dialForAdd.afterClosed().subscribe(result => {
      let buff = new Zone(new ZoneType(result.type.name, result.type.id),
        result.contributorId,
        result.description,
        result.totalTicketAmount,
        result.availableTicketAmount,
        result.name,
        );
      console.log("Zone successfully added" + result);
      const zone$ = this.fest.addZone(buff).pipe(
        map(result => {
          this.singleZone = result;
        })
      );
      zone$.subscribe(data => data);
    })
  }
    /*openDialogForEditing()
    {
      const dialForAdd = this.dialogForZones.open(DialogComponent, {
        data: {
          zone: {
            type: {
              name: this.zoneTypeName, id: this.zoneTypeId,
            },
            contributorId: this.contributorId, description: this.description,
            totalTicketAmount: this.tta, availableTicketAmount: this.ata, name: this.zoneName
          }
        },
      });
      dialForAdd.afterClosed().subscribe(result => {
        let buff = new Zone(new ZoneType(result.type.name, result.type.id),
          result.contributorId,
          result.description,
          result.totalTicketAmount,
          result.availableTicketAmount,
          result.name,
        );
        console.log("Zone successfully edited" + result);
        const zone$ = this.fest.editZone(buff).pipe(
          map(result => {
            this.singleZone = result;
          })
        );
        zone$.subscribe(data => data);
      })
    }*/

  onResize(event) {
    this.breakpoint =
      (event.target.innerWidth <= 650) ? 1
        : (event.target.innerWidth <= 970) ? 2
          : (event.target.innerWidth <= 1050) ? 3 : 3;
  }
}
