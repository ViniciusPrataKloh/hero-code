import { da } from "date-fns/locale";
import { prisma } from "../../design/prisma";
import { Schedule } from "../../domain/entities/Schedule";

export interface ISchedulesRepository{
  create: (name: string, phone: string, date: Date, user_id: string) => Promise<Schedule>;
  findByDateAndUser: (date: Date, user_id: string) => Promise<Schedule | null>;
  findByDayAndUser: (day_start: Date, day_end: Date, user_id: string) => Promise<Schedule[] | null>;
  findById: (schedule_id: string) => Promise<Schedule | null>;
  update: (schedule_id: string, name: string, phone: string, date: Date) => Promise<Schedule | null>;
  delete: (schedule_id: string) => Promise<void>;
}

class SchedulesRepository implements ISchedulesRepository{
  async create(name: string, phone: string, date: Date, user_id: string): Promise<Schedule>{
    const schedule = new Schedule({name, phone, date, user_id});

    await prisma.schedule.create({
      data: {
        name,
        phone,
        date,
        userId: user_id
      }
    });

    return schedule;
  }

  async findByDateAndUser(date: Date, user_id: string): Promise<Schedule | null>{
    const schedule = await prisma.schedule.findFirst({
      where: {
        AND: {
          date,
          userId: user_id
        }
      }
    });

    return schedule;
  }

  async findByDayAndUser(day_start: Date, day_end: Date, user_id: string): Promise<Schedule[] | null>{
    const schedule = await prisma.schedule.findMany({
      where: {
        AND: {
          userId: user_id,
          date: {
            gte: day_start,
            lte: day_end
          },
        },
      }
    });

    return schedule;
  }

  findById(schedule_id: string): Promise<Schedule | null>{
    const schedule = prisma.schedule.findUnique({
      where: {
        id: schedule_id
      }
    });

    return schedule;
  }

  async update(schedule_id: string, name: string, phone: string, date: Date): Promise<Schedule | null>{
    let schedule = await prisma.schedule.findUnique({
      where: {
        id: schedule_id
      }
    });

    schedule = await prisma.schedule.update({
      where: {
        id: schedule_id
      },
      data: {
        name,
        phone,
        date
      }
    });

    return schedule;
  }

  async delete(schedule_id: string): Promise<void>{
    await prisma.schedule.delete({
      where: {
        id: schedule_id
      }
    });

    return;
  }
}

export { SchedulesRepository }