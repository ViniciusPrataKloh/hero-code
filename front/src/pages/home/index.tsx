import { Schedule } from '../../components/schedule'

export function Home() {
    return (
        <main className="mt-8">
            <div className="-text-primary">
                <h2 className="font-light text-2xl leading-9 ">
                    Bem Vindo(a), <strong>Vinícius Prata!</strong>
                </h2>
                <span className="font-light leading-6">
                    Esta é a sua lista de horários de hoje, dia 10/04/2023 😀
                </span>
            </div>

            <div className="mt-12 grid grid-cols-2 ">
                {/* Left */}
                <div className="">
                    <h1 className="-text-secondary font-semibold text-2xl leading-[48px] mr-8">
                        Próximos Horários
                    </h1>

                    <div className="h-[400px] max-h-[400px] overflow-auto border-r-2 -border-primary pr-8 mr-6 scroll-pr-6">
                        <Schedule />
                        <Schedule />
                        <Schedule />
                        <Schedule />
                        <Schedule />
                        <Schedule />
                    </div>
                </div>

                {/* Right */}
                <div></div>
            </div>
        </main>
    )
}
