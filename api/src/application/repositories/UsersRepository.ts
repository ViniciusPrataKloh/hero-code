import { prisma } from "../../design/prisma";
import { User } from "../../domain/entities/User";
import { IUser } from "../../domain/interfaces/UsersInterface";

export interface IUsersRepository{
  create(name: string, email: string, password: string): Promise<User>;
  findUserByEmail(email: string): Promise<User | null>;
  list(): Promise<IUser[]>;
  update(email: string, name: string, password: string, avatarUrl: string): Promise<IUser>;
}

class UsersRepository implements IUsersRepository{
  async create(name: string, email: string, password: string): Promise<User> {
    const user = new User({name, email, password});
    
    await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    });

    return user;
  }
  async findUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });

    return user;
  }
  async list(): Promise<IUser[]> {
    const users = await prisma.user.findMany();

    return users;
  }

  async update(email: string, name: string, newPassword: string, avatarUrl: string = ""): Promise<IUser> {
    const user = await prisma.user.update({
      where: {
        email
      },
      data: {
        email,
        name,
        password: newPassword,
        avatarUrl
      }
    });

    return user;
  }
}


export { UsersRepository };
