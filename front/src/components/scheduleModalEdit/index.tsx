import * as Dialog from '@radix-ui/react-dialog'
import { Clock, X } from 'phosphor-react'
import { InputTransparent } from '../inputTransparent'
import { useState } from 'react'
import { ISchedule } from '../../interfaces/ISchedule.interface'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { api } from '../../utils/axios'
import { AxiosError } from 'axios'

interface IScheduleModalProps {
    schedule: ISchedule
    handleDateChange: (newTime: Date) => void
}

const editScheduleFormSchema = zod.object({
    date: zod.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    hour: zod.string().regex(/^\d{2}:\d{2}$/),
})

type editScheduleFormSchemaType = zod.infer<typeof editScheduleFormSchema>

export function ScheduleModalEdit({
    schedule,
    handleDateChange,
}: IScheduleModalProps) {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(true)

    const { register, handleSubmit, watch } =
        useForm<editScheduleFormSchemaType>({
            resolver: zodResolver(editScheduleFormSchema),
        })

    const newDate = watch('date')
    const newHour = watch('hour')

    async function updateSchedule(newTime: Date) {
        await api
            .put(`/schedules/${schedule.id}`, {
                date: newTime,
            })
            .then(() => {
                handleDateChange(newTime)
                setModalIsOpen(!modalIsOpen)
            })
            .catch((reason: AxiosError<{ message: string }>) => {
                console.error(reason.response?.data.message)
            })
    }

    async function onHandleSubmit() {
        const newTime = new Date(newDate + ' 00:' + newHour)

        await updateSchedule(newTime)
    }

    const hour = schedule.date.toString().split(':', 4)[1]

    return (
        <Dialog.Root open={modalIsOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed w-full h-full inset-0 bg-black opacity-20" />

                <Dialog.Content className="bg-slate-50 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-2xl">
                    <Dialog.Title className="flex items-center justify-between -bg-primary py-[10px] px-[18px] text-white text-2xl font-bold rounded-tl-2xl rounded-tr-2xl">
                        Editar Horário
                        <Dialog.Close>
                            <X weight="bold" />
                        </Dialog.Close>
                    </Dialog.Title>

                    <Dialog.Description className="flex gap-6 mt-2 mx-5 -text-secondary font-semibold text-xl drop-shadow">
                        <span>{hour}h</span>
                        <span>{schedule.name}</span>
                    </Dialog.Description>

                    <form
                        className="flex flex-col gap-6 mt-6 mx-5 -text-primary"
                        onSubmit={handleSubmit(onHandleSubmit)}
                    >
                        <div className="flex flex-row h-8 items-center justify-between">
                            <label>Indique a nova data:</label>
                            <div className="w-[128px]">
                                <InputTransparent
                                    placeholder=""
                                    type="date"
                                    register={{ ...register('date') }}
                                />
                            </div>
                        </div>

                        <div className="flex flex-row h-8 items-center justify-between">
                            <label>Indique o novo horário:</label>
                            <div className="w-[128px]">
                                <InputTransparent
                                    placeholder=""
                                    type="time"
                                    icon={<Clock size={20} />}
                                    register={{ ...register('hour') }}
                                />
                            </div>
                        </div>

                        <div className="mt-4 mb-4 flex items-start justify-center gap-4">
                            <button
                                type="button"
                                onClick={() => setModalIsOpen(!modalIsOpen)}
                                className="w-[110px] py-2.5 px-4 border-2 -border-secondary -text-secondary font-semibold rounded-2xl hover:text-white hover:bg-red-400 hover:border-red-500 transition-colors"
                            >
                                Cancelar
                            </button>
                            <button
                                className="w-[110px] py-2.5 px-4 border-2 -bg-secondary -border-secondary text-white font-semibold rounded-2xl hover:-bg-secondary-50 hover:-border-secondary-50 transition-colors"
                                type="submit"
                            >
                                Editar
                            </button>
                        </div>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>

        // <Dialog.Root open={true}>
        //     <Dialog.Portal>
        //         <Dialog.Overlay className="fixed w-full h-full inset-0 bg-black opacity-30" />
        //         <Dialog.Content className="relative mx-auto my-24 bg-white w-1/2 p-4 rounded shadow-lg">
        //             <Dialog.Title>Editar Horário</Dialog.Title>

        //             <h2>blablabla</h2>
        //         </Dialog.Content>
        //     </Dialog.Portal>
        // </Dialog.Root>
    )
}
