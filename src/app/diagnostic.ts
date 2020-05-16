import { Patient } from './patient';

export class Diagnostic {

  criticite: number;
  description: String;
  id: number;
  patientConserne: Patient;

  constructor(diagnostic: any) {
    this.criticite = diagnostic.criticite;
    this.description = diagnostic.description;
    this.id = diagnostic.id;
    this.patientConserne = diagnostic.patientConserne;

  }
}
