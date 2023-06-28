import { ISchedule } from "../interfaces/SchedulesInterface";

class Schedule{
  id?: string;
  name: string;
  phone: string;
  date: Date;
  user_id?: string;

  constructor({name, phone, date, user_id}: ISchedule){
    this.name = name;
    this.phone = phone;
    this.date = new Date(date);
    this.user_id = user_id;
  }
}

export {Schedule}