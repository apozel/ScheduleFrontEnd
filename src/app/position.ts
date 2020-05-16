export class Position {

  id: number;
  x: number;
  y: number;

  constructor(position: any) {
    this.id = position.id;
    this.x = position.x;
    this.y = position.y;
  }
}
