import { Social } from './social';
import { Position } from './position';

export class Docteur {

  cdhp: String;
  details: Social;
  emplacement: Position;
  id: number;
  lieuDeDepart: Position;
  nom: String;
  prenom: String;

  constructor(docteur: any) {
    this.cdhp = docteur.cdhp ;
    this.details = new Social(docteur.details);
    this.emplacement = new Position(docteur.emplacement);
    this.id = docteur.id;
    this.lieuDeDepart = new Position(docteur.lieuDeDepart);
    this.nom = docteur.nom;
    this.prenom = docteur.prenom;
  }
}
