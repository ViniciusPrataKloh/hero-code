import { PencilSimple, Trash } from 'phosphor-react'
import { useState } from 'react'
import { ScheduleModalEdit } from '../scheduleModalEdit'
import { ISchedule } from '../../interfaces/ISchedule.interface'
// import { date } from 'zod'

interface IProps {
    schedule: ISchedule
    handleDateChange: (newTime: Date) => void
}

export function Schedule({ schedule, handleDateChange }: IProps) {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

    function handleOpenModal() {
        setModalIsOpen(!modalIsOpen)
    }

    const hour = schedule.date.toString().split(':', 4)[1]

    return (
        <div className="w-[492px] mt-6 flex flex-row items-center justify-between bg-white rounded-2xl shadow-lg shadow-gray-400">
            <div className="flex items-center">
                <div className="-bg-secondary py-3 px-5 text-white rounded-l-xl">
                    {hour}h
                </div>

                <span className=" py-3 px-5 ">{schedule.name}</span>
            </div>
            <button
                className="flex gap-3  py-3 px-5 "
                onClick={handleOpenModal}
            >
                <PencilSimple
                    color="#001489"
                    className=" hover:cursor-pointer"
                />
                <Trash color="red" className="hover:cursor-pointer" />
            </button>

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
