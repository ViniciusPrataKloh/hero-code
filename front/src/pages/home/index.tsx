import { useState } from 'react'
import { Schedule } from '../../components/schedule'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export function Home() {
    const [date, setDate] = useState<Date>(new Date())

    const today = new Date().toLocaleDateString('pt-BR')

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
                    <div className="w-[520px] h-[365px] -bg-primary mt-7 ml-12 py-4">
                        <Calendar
                            value={date}
                            locale="pt-BR"
                            className="-bg-primary text-gray-50"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
