import { EventStatus, EventType } from "../constants/event/enum";

export interface Event {
  eventId: number;
  eventName: string;
  eventType: EventType;
  eventPerformer: string;
  eventPerformanceTime: Date;
  eventPlace: string;
  eventThumbnail: string;
  eventCommissionFee: number;
  numberOfListingTicket: number;
  numberOfSoldTicket: number;
  numberOfCompletedTransaction: number;
  eventPlatformFee: number;
  eventStatus: EventStatus;
}
