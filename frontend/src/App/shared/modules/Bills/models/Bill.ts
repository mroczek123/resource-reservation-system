export class Bill {
  id?: string;
  displayData: string;
  value: number;

  constructor(data: { id?: string; displayData: string; value: number }) {
    this.id = data.id;
    this.displayData = data.displayData;
    this.value = data.value;
  }
}
