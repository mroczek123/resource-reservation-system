class UserService {

  static async logIn(data: {email: string, password: string}): Promise<unknown> {
    return true;
  }
  static async logOut(): Promise<unknown> {
    return true;
  }
  static async register(): Promise<unknown> {
    return true;
  }
}

export default UserService;