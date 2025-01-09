import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {


  private reservations: Reservation[] = [];

  constructor() {
    let reservationsJson = localStorage.getItem('reservations');
    this.reservations = reservationsJson ? JSON.parse(reservationsJson) : [];
  }

  //CRUD
  getReservations(): Reservation[] {
    let reservationsJson = localStorage.getItem('reservations');
    this.reservations = reservationsJson ? JSON.parse(reservationsJson) : [];
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id == id);
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
    console.log(this.reservations);
  }

  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id == id);
    this.reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id == updatedReservation.id);
    this.reservations[index] = updatedReservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
