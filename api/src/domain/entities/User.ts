import { IUser } from "../interfaces/UsersInterface";

class User{
  name: string;
  email: string;
  password: string;
  avatarUrl?: string;

  constructor({name, email, password}: IUser){
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export { User };
