import {ZoneType} from './zone.type.model';

export class Zone{
  id: number;
  type: ZoneType;
  contributorId: number;
  description: string;
  totalTicketAmount: number;
  availableTicketAmount: number;
  name: string;


  constructor(type?: ZoneType, contributorId?: number, description?: string, totalTicketAmount?: number, availableTicketAmount?: number, name?: string) {
    this.type = type ?? new ZoneType();
    this.contributorId = contributorId ?? 0;
    this.description = description ?? "";
    this.totalTicketAmount = totalTicketAmount ?? 0;
    this.availableTicketAmount = availableTicketAmount ?? 0;
    this.name = name ?? "";
  }
}
