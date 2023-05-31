import { NextFunction, Request, Response } from "express";
import { IUser } from "../../domain/interfaces/UsersInterface";
import { UsersService } from "../services/UsersService";

class UsersController{

  private usersService: UsersService;

  constructor(){
    this.usersService = new UsersService();
  }

  auth(){

  }

  async handleCreateUser(request: Request, response: Response, next: NextFunction){
    try {
      const {name, email, password}: IUser = request.body;

      const userResponse = await this.usersService.executeCreateUser({name, email, password});

      return response.status(201).json(userResponse);
    } catch (error) {
      next(error)
    }
  }

  async handleListUsers(request: Request, response: Response, next: NextFunction){
    try {
      const users = await this.usersService.executeListUsers();

      return response.status(200).json(users);      
    } catch (error) {
      next(error)
    }
  }

  async handleShowUser(request: Request, response: Response, next: NextFunction){
    const {email} = request.params;

    try {
      const user = await this.usersService.executeShowUser(email);

      return response.status(200).json(user);
    } catch (error) {
      next(error)
    }
  }

  async handleUpdateUser(request: Request, response: Response, next: NextFunction){
    try {
      
    } catch (error) {
      next(error)
    }
  }
}

export { UsersController };
