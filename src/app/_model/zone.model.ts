import {ZoneType} from './zone.type.model';

export interface Zone{
  totalTicketsAmount: number;
  availableTicketAmount: number;
  name: string;
  description: string;
  contributorId: number;
  type: ZoneType;
}
