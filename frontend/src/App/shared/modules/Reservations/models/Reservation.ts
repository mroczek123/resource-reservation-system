export class Reservation {
  id?: string;
  table: string;
  date: Date;

  constructor(data: {id?: string, table: string, date: Date}) {
    this.id = data.id;
    this.table = data.table;
    this.date = data.date;
  }
}