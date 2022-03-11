import { Injectable } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createBooking(apt: Appointment) {
    return this.bookingListRef.push({
      idbook: apt.idbook,
      titulopub: apt.titulopub,
      autores: apt.autores,
      tipopub: apt.tipopub,
      eventorevista: apt.eventorevista,
      doi: apt.doi,
      anyopub: apt.anyopub
    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/appointment');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, apt: Appointment) {
    return this.bookingRef.update({
      idbook: apt.idbook,
      titulopub: apt.titulopub,
      autores: apt.autores,
      tipopub: apt.tipopub,
      eventorevista: apt.eventorevista,
      doi: apt.doi,
      anyopub: apt.anyopub,
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/appointment/' + id);
    this.bookingRef.remove();
  }
}
