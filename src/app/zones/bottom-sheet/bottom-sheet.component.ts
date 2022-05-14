import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {ZoneType} from '../../_model/zone.type.model';
import {FestService} from '../../fest.service';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {types} from '@angular/compiler-cli/linker/babel/src/babel_core';

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

  openNotificationDialog(){
    this.notifDialog.open(NotificationDialogForType);
  }

  deleteType(id: number) {
    this.fest.deleteZoneType(id).subscribe(() => {
      this.openNotificationDialog();
      this.fest.getZonesTypes().subscribe(zoneTypes => this.dataSheet.types = zoneTypes);
    });

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
  constructor() {}
}
