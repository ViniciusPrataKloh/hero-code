import * as Dialog from '@radix-ui/react-dialog'
import { Clock, X } from 'phosphor-react'
import { InputTransparent } from '../inputTransparent'
import { useState } from 'react'

export function ScheduleModalEdit() {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(true)

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
                        <span>10h</span>
                        <span>Luana Prado</span>
                    </Dialog.Description>

                    <form className="flex flex-col gap-6 mt-6 mx-5 -text-primary">
                        <div className="flex flex-row h-8 items-center justify-between">
                            <label>Indique a nova data:</label>
                            <div className="w-[128px]">
                                <InputTransparent
                                    placeholder=""
                                    type="date"
                                    // register={{ ...register('date') }}
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
                                    // register={{ ...register('hour') }}
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
