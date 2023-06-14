import { compare, hash  } from "bcrypt";
import { IUser } from "../../domain/interfaces/UsersInterface";
import { UsersRepository } from "../repositories/UsersRepository";
import { sign} from "jsonwebtoken";

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

  async executeUpdateUser(user_id: string, name: string, password: string, oldPassword: string, avatarUrl?: string){
    let user = await this.usersRepository.findUserById(user_id);

    if(!user){
      throw new Error("User not exists!");
    }

    let hashPassword = user.password;
    let userName = user.name;

    if(oldPassword && password){
      const comparePassword = await compare(oldPassword, user.password);
 
      if(!comparePassword){
        throw new Error("Invalid credentials!");
      }

      hashPassword = await hash(password, 10); 
    }

    if(name){
      userName = name;
    }

    user = await this.usersRepository.update(
      user_id,
      userName,
      hashPassword,
      avatarUrl
    );

    return user;
  }

  async executeAuthUser(email: string, password: string){
    const user = await this.usersRepository.findUserByEmail(email);

    if(!user){
      throw new Error("Invalid credentials!");
    }

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
      throw new Error("Invalid credentials!");
    }

    const secretKey: string | undefined = process.env.TOKEN_SECRET_KEY;

    if(!secretKey){
      throw new Error("Invalid token secrety key!");
    }

    const token = sign({email}, secretKey, {
      subject: user.id,
      expiresIn: 60 * 60
    });

    return {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    }
  }
}

export { UsersService };
