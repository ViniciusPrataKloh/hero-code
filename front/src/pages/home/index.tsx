import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Schedule } from '../../components/schedule'
import { DayPicker } from 'react-day-picker'
import { ptBR } from 'date-fns/locale'

import styles from './calendar.module.css'

export function Home() {
    const [date, setDate] = useState<Date>(new Date())

    const navigate = useNavigate()

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
    }, [])

    const today = date.toLocaleDateString('pt-BR')

    return (
        <main className="mt-8">
            <div className="-text-primary">
                <h2 className="font-light text-2xl leading-9 ">
                    Bem Vindo(a), <strong>Vinícius Prata!</strong>
                </h2>
                <span className="font-light leading-6">
                    Esta é a sua lista de horários de hoje, dia {today} 😀
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
                            <Schedule hour="10h" client="Maiara Maraisa" />
                            <Schedule hour="10h" client="Maiara Maraisa" />
                            <Schedule hour="10h" client="Maiara Maraisa" />
                            <Schedule hour="10h" client="Maiara Maraisa" />
                            <Schedule hour="10h" client="Maiara Maraisa" />
                            <Schedule hour="10h" client="Maiara Maraisa" />
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
