import { Social } from './social';
import { Position } from './position';

export class Patient {
  details:Social;
  id: number;
  lieuDeVie: Position;
  nom: String;
  prenom: String;

  constructor(patient: any) {
    this.details = new Social(patient.details);
    this.id = patient.id;
    this.lieuDeVie = new Position(patient.lieuDeVie) ;
    this.nom = patient.nom;
    this.prenom = patient.prenom;
   }
}
