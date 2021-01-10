export class Employee {
  firstName: string;
  lastName: string;
  role: string;
  
  constructor(data: Employee) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.role = data.role;
  }

  get fullName(): string {
    return this.firstName + this.lastName;
  }
}