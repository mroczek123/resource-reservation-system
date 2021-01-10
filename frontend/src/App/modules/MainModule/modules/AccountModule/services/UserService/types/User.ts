export enum UserRole {
  WAITER,
  CLIENT,
  RESTAURATOR
}

interface UserProps {
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  birthDate: Date;
  role: UserRole;
}
export class User {
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  birthDate: Date;
  role: UserRole;

  constructor(data: UserProps) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.avatarUrl = data.avatarUrl;
    this.birthDate = data.birthDate;
    this.role = data.role;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}
