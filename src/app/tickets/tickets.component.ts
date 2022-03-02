import { Component, OnInit } from '@angular/core';
import {Tickets} from '../_model/tickets.model';
import {FestService} from '../fest.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.less']
})
export class TicketsComponent implements OnInit {

  tickets: Tickets[];
  constructor(private fest: FestService) { }

  ngOnInit(): void {
    this.fest.getTickets().pipe(
      map(results => {
        this.tickets = results;
      })
    );
  }

}
