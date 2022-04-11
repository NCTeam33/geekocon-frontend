import { Component, OnInit } from '@angular/core';
import {FestService} from '../fest.service';
import {Contributor} from '../_model/contributor.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-zone-management',
  templateUrl: './zone-management.component.html',
  styleUrls: ['./zone-management.component.less']
})
export class ZoneManagementComponent implements OnInit {

  contributors: Contributor[];
  constructor(private fest: FestService) { }

  ngOnInit(): void {
    this.fest.getContributors().pipe(
      map(results => {
        this.contributors = results;
      })
    );
  }

}
