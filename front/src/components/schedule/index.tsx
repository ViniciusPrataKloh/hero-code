import { PencilSimple, Trash } from 'phosphor-react'
import { useState } from 'react'
import { ScheduleModalEdit } from '../scheduleModalEdit'
import { ISchedule } from '../../interfaces/ISchedule.interface'
import { api } from '../../utils/axios'
import { AxiosError, AxiosResponse } from 'axios'

interface IProps {
    schedule: ISchedule
    handleDateChange: (newTime: Date) => void
}

export function Schedule({ schedule, handleDateChange }: IProps) {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

    function handleOpenModal() {
        setModalIsOpen(!modalIsOpen)
    }

    async function handleDeleteSchedule() {
        await api
            .delete(`/schedules/${schedule.id}`)
            .then((response: AxiosResponse) => {
                console.log(response)
            })
            .catch((reason: AxiosError<{ message: string }>) => {
                console.error(reason.response?.data.message)
            })
    }

    const hour = schedule.date.toString().split(':', 4)[1]

    return (
        <div className="w-[492px] mt-6 flex flex-row items-center justify-between bg-white rounded-2xl shadow-lg shadow-gray-400">
            <div className="flex items-center">
                <div className="w-[72px] -bg-secondary py-3 px-5 text-white rounded-l-xl items-center justify-center">
                    <span className="font-medium text-xl">{hour}h</span>
                </div>

                <span className=" py-3 px-5 font-medium -text-primary">
                    {schedule.name}
                </span>
            </div>

            <div className="flex mr-5 gap-1">
                <button
                    className="flex gap-3  py-3 px-5 "
                    onClick={handleOpenModal}
                >
                    <PencilSimple
                        color="#001489"
                        className=" hover:cursor-pointer"
                    />
                </button>

                <button onClick={handleDeleteSchedule}>
                    <Trash color="red" className="hover:cursor-pointer" />
                </button>
            </div>

            {modalIsOpen ? (
                <ScheduleModalEdit
                    schedule={schedule}
                    handleDateChange={handleDateChange}
                />
            ) : (
                <></>
            )}
        </div>
    )
}
