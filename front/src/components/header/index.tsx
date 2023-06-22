import { UserCircle } from 'phosphor-react'
import logo from '../../assets/header-logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function Header() {
    const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false)

    return (
        <header className="flex flex-row justify-between items-center rounded-2xl -bg-primary shadow-gray-400 shadow-lg py-3 px-6 font-bold text-white">
            <Link to={'/'} className="flex items-center gap-4">
                <img src={logo} alt="" />
                <span>Hero Hairdresses</span>
            </Link>

            {/* <Link to="/profile" className="flex items-center gap-2">
                <UserCircle size={24} weight="bold" />
                <span>Perfil</span>
            </Link> */}

            {dropdownIsOpen ? (
                <div className="flex items-center gap-2">
                    <UserCircle size={24} weight="bold" />
                    <span>Perfil</span>

                    <div className="relative flex font-normal">
                        <ul className="absolute -bg-primary top-4 right-2 p-0 list-none rounded-lg">
                            <li className="px-3 py-4 hover:-bg-primary-50 hover: rounded-lg">
                                Agendamentos
                            </li>
                            <li className="px-3 py-4 hover:-bg-primary-50 hover: rounded-lg">
                                Editar perfil
                            </li>
                            <li className="px-3 py-4 hover:-bg-primary-50 hover: rounded-lg">
                                Sair
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </header>
    )
}
