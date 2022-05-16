import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {ZoneType} from '../../_model/zone.type.model';
import {FestService} from '../../fest.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {types} from '@angular/compiler-cli/linker/babel/src/babel_core';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.less']
})
export class BottomSheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public dataSheet: any, private fest: FestService, public notifDialog: MatDialog) { }

  ngOnInit(): void {
  }

  stopPropagation(event){
    event.stopPropagation();
  }

  openNotificationDialog(message: HttpResponse<any>, choice: boolean){
    if(choice){
      this.notifDialog.open(NotificationDialogForType, {
        data: {
          message: "Zone Type was successfully deleted!",
        }
      });
    }
    else {
      let string = JSON.stringify(message);
      let buff;
      JSON.parse(string, ((key, value) => {
        if(key === "error") {
          buff = value;
        }
      }))
      this.notifDialog.open(NotificationDialogForType, {
        data: {
          message: buff,
        }
      });
    }
  }

  deleteType(id: number) {
    this.fest.deleteZoneType(id).subscribe((message) => {
      this.openNotificationDialog(message, true);
      this.fest.getZonesTypes().subscribe(zoneTypes => this.dataSheet.types = zoneTypes);
    },
      ((error) => {
        this.openNotificationDialog(error, false);
      }));

  }

  editType(id: number, name: string) {
    let buff = new ZoneType(name, id);
    this.fest.editZoneType(id, buff).subscribe(() => this.fest.getZonesTypes().subscribe(zoneTypes => this.dataSheet.types = zoneTypes));
  }

}

@Component({
  selector: 'notification-dialog-for-type',
  templateUrl: 'notification-dialog-for-type.html',
})
export class NotificationDialogForType {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
