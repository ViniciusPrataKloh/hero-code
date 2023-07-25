import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DayPicker } from 'react-day-picker'
import { ptBR } from 'date-fns/locale'
import { AxiosError, AxiosResponse } from 'axios'
import { format } from 'date-fns'
import { api } from '../../utils/axios'
import { Schedule } from '../../components/schedule'

import styles from './calendar.module.css'
import { ISchedule } from '../../interfaces/ISchedule.interface'
import { CalendarX } from 'phosphor-react'

export function Home() {
    const [date, setDate] = useState<Date>(new Date())
    const [schedules, setSchedules] = useState<ISchedule[]>([])

    const navigate = useNavigate()

    const today = date.getTime()
    const todayFormat = format(today, 'dd/MM/yyyy')

    function isWeekend(date: Date) {
        const day = date.getDay()
        return day === 0 || day === 6
    }

    function isWeekDay(date: Date) {
        const day = date.getDay()
        return day !== 0 && day !== 6
    }

    function handleDateChange(date: Date) {
        setDate(date)
    }

    useEffect(() => {
        const token = localStorage.getItem('tokenHeroId')

        if (!token) {
            navigate('/login')
        }

        async function getSchedules() {
            await api
                .get(`/schedules/${today}`)
                .then((response: AxiosResponse) => {
                    setSchedules(response.data)
                })
                .catch((reason: AxiosError<{ message: string }>) => {
                    console.error(reason.response?.data.message)
                })
        }

        getSchedules()
    }, [today, navigate])

    return (
        <main className="mt-8">
            <div className="-text-primary">
                <h2 className="font-light text-2xl leading-9 ">
                    Bem Vindo(a), <strong>Vinícius Prata!</strong>
                </h2>
                <span className="font-light leading-6">
                    Esta é a sua lista de horários de hoje, dia {todayFormat} 😀
                </span>
            </div>

            <div className="">
                <h1 className="mt-12 -text-secondary font-semibold text-2xl leading-[48px] mr-8">
                    Próximos Horários
                </h1>

                <div className="grid grid-cols-2">
                    {/* Left */}
                    <div className="col-span-1">
                        <div className="h-[4040px] max-h-[400px] overflow-auto border-r-2 -border-primary py-4">
                            {schedules.length > 0 ? (
                                schedules.map((schedule) => {
                                    return (
                                        <Schedule
                                            key={schedule.id}
                                            schedule={schedule}
                                            handleDateChange={handleDateChange}
                                        />
                                    )
                                })
                            ) : (
                                <div className="flex flex-row gap-4 items-center justify-center mt-8">
                                    <CalendarX size={32} weight="fill" />
                                    <span>
                                        Não há agendamentos para esta data.
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right */}
                    <div className="flex justify-center items-center">
                        <DayPicker
                            mode="single"
                            disableNavigation
                            showOutsideDays
                            // fixedWeeks
                            locale={ptBR}
                            className={styles.calendar}
                            classNames={{ day: styles.day }}
                            selected={date}
                            modifiersClassNames={{
                                selected: styles.selected,
                                disabled: styles.disabled,
                                outside: styles.outside,
                            }}
                            modifiers={{ available: isWeekDay }}
                            disabled={isWeekend}
                            onDayClick={handleDateChange}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
