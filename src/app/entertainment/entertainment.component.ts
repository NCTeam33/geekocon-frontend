import { Component, OnInit } from '@angular/core';
import { FestService } from '../fest.service';
import { map, catchError } from 'rxjs/operators';
import { entertainment } from '';
import { of } from 'rxjs';
@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.less']
})
export class EntertainmentComponent implements OnInit {

  entertainment: EntertainmentComponent[];
  constructor(private s) { }

  ngOnInit(): void {
    const entertainment$ = this.fest.getEntertainment().pipe(
      map(results => {
        this.entertainment = results;
      }),
      catchError(error => {
        console.log(error);
        return of([]);
      })
    );
  }

}
