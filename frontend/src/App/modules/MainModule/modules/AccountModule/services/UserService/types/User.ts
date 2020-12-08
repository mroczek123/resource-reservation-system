export enum UserRole {
  WAITER,
  CLIENT,
  RESTAURATOR
}

export class User {
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  birthDate: Date;
  role: UserRole;

  constructor(data: User) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.avatarUrl = data.avatarUrl;
    this.birthDate = data.birthDate;
    this.role = data.role;
  }
}
