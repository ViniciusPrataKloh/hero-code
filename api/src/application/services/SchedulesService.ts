import { SchedulesRepository } from "../repositories/SchedulesRepository"
import { endOfDay, getDay, getDayOfYear, getTime, parse, startOfDay } from "date-fns"

class SchedulesService{
  private schedulesRepository: SchedulesRepository;

  constructor(){
    this.schedulesRepository = new SchedulesRepository();
  }

  async executeCreateSchedule(name: string, phone: string, date: Date, user_id: string){
    const scheduleAlreadyExists = await this.schedulesRepository.findByDateAndUser(date, user_id);
    console.log({date })
    console.log(scheduleAlreadyExists)

    if(scheduleAlreadyExists){
      throw new Error("Schedule already exists at this time for this user!");
    }

    const schedule = await this.schedulesRepository.create(name, phone, date, user_id);

    return schedule;
  }

  async executeListSchedules(date: string, user_id: string){
    const day_start = startOfDay(new Date(date));
    const day_end = endOfDay(new Date(day_start));

    // const timestamp_start = getTime(day_start)
    // const timestamp_end = getTime(day_end)

    const schedules = await this.schedulesRepository.findByDayAndUser(day_start, day_end, user_id);

    return schedules;
  }

  async executeDeleteSchedule(schedule_id: string){
    const schedule = await this.schedulesRepository.findById(schedule_id);

    if(!schedule){
      throw new Error("Schedule not exists!");
    }

    await this.schedulesRepository.delete(schedule_id);

    return;
  }

  async executeUpdateSchedule(schedule_id: string, name: string, phone: string, date: Date){
    let schedule = await this.schedulesRepository.findById(schedule_id);

    if(!schedule){
      throw new Error("Schedule not exists!");
    }

    schedule.name = (schedule.name === name) ? schedule.name : name; 
    schedule.phone = (schedule.phone === phone) ? schedule.phone : phone; 
    schedule.date = (schedule.date === date) ? schedule.date : date; 

    console.log(schedule);

    schedule = await this.schedulesRepository.update(schedule_id, schedule.name, schedule.phone, schedule.date);

    return schedule;
  }
}

export { SchedulesService }