import { Clock } from 'phosphor-react'
import { InputTransparent } from '../../components/inputTransparent'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
// import { getTime } from 'date-fns'
import { api } from '../../utils/axios'
import { AxiosError } from 'axios'
import { AccountContext } from '../../contexts/AccountContext'

export function Schedule() {
    const { register, handleSubmit, watch } = useForm()
    let token

    const navigate = useNavigate()

    const { user } = useContext(AccountContext)

    // function convertDateAndHourToTimestamp(date: string, hour: string) {
    //     return getTime(new Date(date + 'T00:' + hour + '.000Z'))
    // }

    function formatDateAndHour(date: string, hour: string) {
        return new Date(date + 'T00:' + hour + '.000Z')
    }

    async function handleSubmitForm() {
        await api
            .post('/schedules', {
                user_id: user?.id,
                name,
                phone,
                date: formatDateAndHour(date, hour),
            })
            .then(() => {
                alert('Agendamento criado com sucesso!')
                navigate('/schedule')
            })
            .catch((reason: AxiosError<{ message: string }>) => {
                console.error(reason.response?.data.message)
                alert(reason.response?.data.message)
            })
    }

    useEffect(() => {
        token = localStorage.getItem('tokenHeroId')

        if (!token) {
            navigate('/login')
        }
    }, [token])

    const name = watch('name')
    const phone = watch('phone')
    const date = watch('date')
    const hour = watch('hour')

    return (
        <section className="mt-8 mx-auto">
            <h2 className="-text-primary text-2xl font-medium mb-12">
                Agendamento de Horário
            </h2>

            <div className="flex items-center justify-center">
                <form
                    onSubmit={handleSubmit(handleSubmitForm)}
                    className="flex flex-col items-center gap-2 mt-8 font-medium -text-primary"
                >
                    <div className="flex flex-col">
                        <label>Nome do cliente</label>
                        <InputTransparent
                            placeholder="Vinícius Prata"
                            type="text"
                            register={{ ...register('name') }}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label>Celular</label>
                        <InputTransparent
                            placeholder="(xx) xxxxx-xxxx"
                            type="tel"
                            register={{ ...register('phone') }}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                            <label>Data</label>
                            <InputTransparent
                                placeholder="Seu"
                                type="date"
                                register={{ ...register('date') }}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label>Horário</label>
                            <InputTransparent
                                placeholder="Seu"
                                type="time"
                                icon={<Clock size={20} />}
                                register={{ ...register('hour') }}
                            />
                        </div>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-4">
                        <button className="w-[110px] py-2.5 px-4 border-2 -border-secondary -text-secondary font-semibold rounded-2xl hover:text-white hover:bg-red-400 hover:border-red-500 transition-colors">
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="w-[110px] py-2.5 px-4 border-2 -bg-secondary -border-secondary text-white font-semibold rounded-2xl hover:-bg-secondary-50 hover:-border-secondary-50 transition-colors"
                        >
                            Agendar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
