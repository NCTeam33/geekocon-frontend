import {Component, Inject, OnInit} from '@angular/core';
import { FestService } from '../fest.service';
import { map, catchError } from 'rxjs/operators';
import { Zone } from '../_model/zone.model';
import { ZoneType } from '../_model/zone.type.model';
import {AppComponent} from '../app.component';
import {DialogComponent} from './dialog/dialog.component';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { DialogZoneTypeComponent } from './dialog-zone-type/dialog-zone-type.component';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {BottomSheetComponent, NotificationDialogForType} from './bottom-sheet/bottom-sheet.component';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.less']
})

export class ZonesComponent implements OnInit {
  choice: number;
  flag: boolean;
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
  constructor(private fest: FestService, private app: AppComponent, private dialogForZones: MatDialog,
              private dialogForZoneTypes: MatDialog, private zoneTypeSheet: MatBottomSheet, public notifDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getRoles();
    this.breakpoint =
      (window.innerWidth <= 650) ? 1 : (window.innerWidth <= 970) ? 2 : (window.innerWidth <= 1050) ? 3 : 3;
    this.getZones();
    this.getZoneTypes();
  }

  deleteZone(zone: Zone) {
    this.fest.deleteZone(zone.id).subscribe(() => {
      this.openNotificationDialog(0);
      this.getZones();
    });

  }

  addZoneType() {
    const dialForAdd = this.dialogForZoneTypes.open(DialogZoneTypeComponent, {
      data: {
        name: this.zoneTypeName
      },
    });
    dialForAdd.afterClosed().subscribe(result => {
      if(result === undefined){
        this.openNotificationDialog(1);
      } else {
        console.log("Zone type successfully added");
        let buff: ZoneType = new ZoneType(result);
        const zoneType$ = this.fest.addZoneType(buff);
        zoneType$.subscribe(zoneType => this.zoneTypes.push(zoneType));
        this.openNotificationDialog(2);
      }
    })
  }
  getZones() {
    this.fest.getZones().subscribe(zones => this.zones = zones);
  }

  getZonesByType(id: number) {
    this.fest.getZonesByType(id).subscribe(zones => this.zones = zones);
  }

  getZoneTypes() {
    this.fest.getZonesTypes().subscribe(zoneTypes => this.zoneTypes = zoneTypes);
  }

  getRoles() {
    this._roles = this.app.getRoles();
  }

  openBottomSheet() {
    const bottomSheet$ = this.zoneTypeSheet.open(BottomSheetComponent, {
      data: {
        types: this.zoneTypes,
      }
    });
    bottomSheet$.afterDismissed().subscribe(() => this.getZoneTypes());
  }

  openNotificationDialog(choice: number){
    let message: string;
    switch (choice){
      case 0: {
        message = "Zone was successfully deleted!";
        break;
      }
      case 1: {
        message = "String is empty, try again!";
        break;
      }
      case 2: {
        message = "Zone Type was successfully added!";
        break;
      }
    }
    this.notifDialog.open(NotificationDialog, {
      data: {
        message: message,
      }
    });
  }

  openDialogForAdd() {
    this.flag = false;
    const dialForAdd = this.dialogForZones.open(DialogComponent, {
      data: {
        zone: {
          type: {
            id: this.zoneTypeId
          },
          contributorId: this.contributorId, description: this.description,
          totalTicketAmount: this.tta, availableTicketAmount: this.ata, name: this.zoneName
        },
        zoneTypes: this.zoneTypes,
        flag: this.flag
      },
    });
    dialForAdd.afterClosed().subscribe(result => {
      /*if(result.zone.name === null){
        this.openNotificationDialog(1);
      }*/
      let buff = new Zone(new ZoneType("", result.type.id),
        result.contributorId,
        result.description,
        result.totalTicketAmount,
        result.availableTicketAmount,
        result.name,
        );
      console.log("Zone successfully added");
      const zones$ = this.fest.addZone(buff);
      zones$.subscribe(zone => this.zones.push(zone));
    })
  }
    openDialogForEditing(zone: Zone)
    {
      this.flag = true;
      const dialForEditing = this.dialogForZones.open(DialogComponent, {
        data: {
          zone: zone,
          zoneTypes: this.zoneTypes,
          flag: this.flag,
        },
      });
      dialForEditing.afterClosed().subscribe(result => {
        let buff = new Zone(new ZoneType("", result.type.id),
          result.contributorId,
          result.description,
          result.totalTicketAmount,
          result.availableTicketAmount,
          result.name,
        );
        console.log("Zone successfully edited");
        const zones$ = this.fest.editZone(zone.id, buff);
        zones$.subscribe(() => this.getZones());
      })
    }

  onResize(event) {
    this.breakpoint =
      (event.target.innerWidth <= 650) ? 1
        : (event.target.innerWidth <= 970) ? 2
          : (event.target.innerWidth <= 1050) ? 3 : 3;
  }
}

@Component({
  selector: 'notification-dialog',
  templateUrl: 'notification-dialog.html',
})
export class NotificationDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
