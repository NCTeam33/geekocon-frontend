import {ZoneType} from './zone.type.model';

export interface Zone{
  total_tickets_amount: number;
  available_ticket_amount: number;
  name: string;
  description: string;
  contributor_id: number;
  type_id: ZoneType;
}
