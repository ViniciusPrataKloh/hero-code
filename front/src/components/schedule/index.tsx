import { PencilSimple, Trash } from 'phosphor-react'
import { useState } from 'react'
import { ScheduleModalEdit } from '../scheduleModalEdit'

interface Props {
    date: Date
    client: string
}

export function Schedule({ date, client }: Props) {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(true)

    function handleOpenModal() {
        setModalIsOpen(!modalIsOpen)
    }

    const hour = date.toString().split(':', 4)[1]
    // const minutes = date.toString().split(':', 4)[2].split('.')[0]

    return (
        <div className="w-[492px] mt-6 flex flex-row items-center justify-between bg-white rounded-2xl shadow-lg shadow-gray-400">
            <div className="flex items-center">
                <div className="-bg-secondary py-3 px-5 text-white rounded-l-xl">
                    {hour}h
                </div>

                <span className=" py-3 px-5 ">{client}</span>
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

            {modalIsOpen ? <ScheduleModalEdit /> : <></>}
        </div>
    )
}
