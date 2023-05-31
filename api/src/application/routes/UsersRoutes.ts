import { Router } from "express";
import { UsersController } from "../controllers/UsersController";

class UsersRoutes{

  private router: Router;
  private usersController: UsersController;

  constructor(){
    this.router = Router();
    this.usersController = new UsersController();
  }

  getRoutes(){
    this.router.post('/', this.usersController.handleCreateUser.bind(this.usersController));
    
    this.router.get('/:email', this.usersController.handleShowUser.bind(this.usersController));
    
    this.router.get('/', this.usersController.handleListUsers.bind(this.usersController));
    
    this.router.put('/', this.usersController.handleUpdateUser.bind(this.usersController));

    return this.router;
  }
}

export { UsersRoutes };
