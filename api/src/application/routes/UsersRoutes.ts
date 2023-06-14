import { Router } from "express";
import { UsersController } from "../controllers/UsersController";
import multer from "multer";
import uploadConfig from "../middlewares/Upload";
import { Authorization } from "../middlewares/Authorization";

class UsersRoutes{

  private router: Router;
  private usersController: UsersController;
  private uploadAvatar = multer(uploadConfig.upload("../uploads"));
  private authorization: Authorization;


  constructor(){
    this.router = Router();
    this.usersController = new UsersController();
    this.authorization = new Authorization();
  }

  getRoutes(){
    this.router.post('/', this.usersController.handleCreateUser.bind(this.usersController));
    
    this.router.get('/:email', this.usersController.handleShowUser.bind(this.usersController));
    
    this.router.get('/', this.usersController.handleListUsers.bind(this.usersController));
    
    this.router.put('/:email', this.authorization.authorize, this.uploadAvatar.single("avatarUrl") , this.usersController.handleUpdateUser.bind(this.usersController));

    this.router.post('/auth', this.usersController.handleAuthUser.bind(this.usersController));

    return this.router;
  }
}

export { UsersRoutes };
