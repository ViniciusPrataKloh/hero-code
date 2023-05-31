import { IUser } from "../../domain/interfaces/UsersInterface";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService{
  private usersRepository: UsersRepository;

  constructor(){
    this.usersRepository = new UsersRepository();
  }

  async executeCreateUser({name, email, password}: IUser){
    const userAlreadyExists = await this.usersRepository.findUserByEmail(email);

    if(userAlreadyExists){
      throw new Error("User already exists.");
    }

    const user = await this.usersRepository.create(name, email, password);

    return user;
  }

  async executeListUsers(){
    const users = await this.usersRepository.list();

    return users;
  }

  async executeShowUser(email: string){
    const user = await this.usersRepository.findUserByEmail(email);

    return user;
  }

  async executeUpdateUser(){

  }
}

export { UsersService };
