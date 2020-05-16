import { Time } from '@angular/common';
import { Diagnostic } from './diagnostic';
import { Patient } from './patient';
import { Position } from './position';

export class Appointment {
  id: number;
  date: Date;
  diag: Diagnostic;
  dureeConsultation: Time;
  heureDebut: Time;
  lieu: Position;
  malade: Patient;

  constructor(appointement:any) {
    this.id = appointement.id;
    this.malade = appointement.malade;
    this.date = appointement.date;
    this.dureeConsultation = appointement.dureeConsultation;
    this.heureDebut = appointement.heureDebut;
    this.lieu = appointement.lieu;
    this.diag = appointement.diag;
  }



}
