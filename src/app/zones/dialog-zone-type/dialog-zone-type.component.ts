import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ZoneType } from 'src/app/_model/zone.type.model';

@Component({
  selector: 'app-dialog-zone-type',
  templateUrl: './dialog-zone-type.component.html',
  styleUrls: ['./dialog-zone-type.component.less']
})
export class DialogZoneTypeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
  }

}
