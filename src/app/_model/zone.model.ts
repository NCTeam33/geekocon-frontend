import {ZoneType} from './zone.type.model';

export class Zone{
  totalTicketsAmount: number;
  availableTicketAmount: number;
  name: string;
  description: string;
  contributorId: number;
  type: ZoneType;

  constructor(totalTicketsAmount?: number, availableTicketAmount?: number, name?: string, description?: string, contributorId?: number, type?: ZoneType) {
    this.totalTicketsAmount = totalTicketsAmount ?? 0;
    this.availableTicketAmount = availableTicketAmount ?? 0;
    this.name = name ?? "";
    this.description = description ?? "";
    this.contributorId = contributorId ?? 0;
    this.type = type ?? new ZoneType();
  }
}
