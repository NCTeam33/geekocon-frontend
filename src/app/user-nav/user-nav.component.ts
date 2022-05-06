import { Component, OnInit } from '@angular/core';
import { FestService } from '../fest.service';
import { Zone } from '../_model/zone.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.less']
})
export class UserNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
