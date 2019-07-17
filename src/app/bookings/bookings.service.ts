import { Injectable } from "@angular/core";
import { Booking } from "./booking.model";

@Injectable({
  providedIn: "root"
})
export class BookingsService {
  private _bookings: Booking[] = [
    new Booking("abc", "p1", "2", "Manhattan Mansion", 2)
  ];

  get bookings() {
    return [...this._bookings];
  }
}
