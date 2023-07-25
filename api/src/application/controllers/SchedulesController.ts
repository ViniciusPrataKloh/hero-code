import { NextFunction, Request, Response } from "express";
import { SchedulesService } from "../services/SchedulesService"
import { format, formatISO } from "date-fns";

class SchedulesController{
  private schedulesService: SchedulesService;

  constructor(){
    this.schedulesService = new SchedulesService();
  }

  async handleCreateSchedule(request: Request, response: Response, next: NextFunction){
    try{
      const { name, phone, date } = request.body;
      const { user_id } = request;
      
      const scheduleResponse = await this.schedulesService.executeCreateSchedule(name, phone, date, user_id);

      return response.status(201).send(scheduleResponse);
    } catch (error) {
      next(error)
    }
  }

  async handleListSchedules(request: Request, response: Response, next: NextFunction){
    try{
      const { day } = request.params;
      const { user_id } = request;

      const schedulesResponse = await this.schedulesService.executeListSchedules(parseInt(day), user_id);

      return response.status(201).send(schedulesResponse);
    } catch (error) {
      next(error)
    }
  }

  async handleDeleteSchedule(request: Request, response: Response, next: NextFunction){
    try{
      const { schedule_id } = request.params;

      await this.schedulesService.executeDeleteSchedule(schedule_id);

      return response.status(200).send();
    } catch (error) {
      next(error)
    }
  }

  async handleUpdateSchedule(request: Request, response: Response, next: NextFunction){
    try{
      const { name, phone, date } = request.body;
      const { schedule_id } = request.params;

      const scheduleResponse = await this.schedulesService.executeUpdateSchedule(schedule_id, name, phone, date);

      return response.status(200).send(scheduleResponse);
    } catch (error) {
      next(error)
    }
  }
}

export { SchedulesController }