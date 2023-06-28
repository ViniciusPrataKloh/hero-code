import { Router } from "express";
import { SchedulesController } from "../controllers/SchedulesController";
import { Authorization } from "../middlewares/Authorization";

class SchedulesRoutes{

  private router: Router;
  private schedulesController: SchedulesController;
  private authorization: Authorization;

  constructor(){
    this.router = Router();
    this.authorization = new Authorization();
    this.schedulesController = new SchedulesController();
  }

  getRoutes(){
    this.router.post('/', this.authorization.authorize, this.schedulesController.handleCreateSchedule.bind(this.schedulesController));
    
    this.router.get('/:date', this.authorization.authorize, this.schedulesController.handleListSchedules.bind(this.schedulesController));
    
    this.router.get('/', this.authorization.authorize, this.schedulesController.handleListSchedules.bind(this.schedulesController));
    
    this.router.put('/', this.authorization.authorize, this.schedulesController.handleUpdateSchedule.bind(this.schedulesController));

    return this.router;
  }
}

export { SchedulesRoutes };
