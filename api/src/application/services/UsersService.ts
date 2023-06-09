import { compare, hash } from "bcrypt";
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

    const hashPassword = await hash(password, 10);

    const user = await this.usersRepository.create(name, email, hashPassword);

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

  async executeUpdateUser(email: string, password: string, oldPassword: string, avatarUrl?: string){
    let user = await this.usersRepository.findUserByEmail(email);

    if(!user){
      throw new Error("User not exists!");
    }

    const comparePassword = await compare(oldPassword, user.password);
 
    if(!comparePassword){
      throw new Error("Invalid credentials!");
    }

    const hashPassword = await hash(password, 10); 

    user = await this.usersRepository.update(
      email,
      user.name,
      hashPassword,
      avatarUrl
    );

    return user;
  }
}

export { UsersService };
