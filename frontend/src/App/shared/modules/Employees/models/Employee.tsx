export class Employee {
  id?: string;
  firstName: string;
  lastName: string;
  role: string;
  
  constructor(data: {id ?: string, firstName: string, lastName: string, role: string}) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.role = data.role;
  }

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}