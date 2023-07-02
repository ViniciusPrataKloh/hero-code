import { UserCircle } from 'phosphor-react'
import logo from '../../assets/header-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function Header() {
    const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false)

    const navigate = useNavigate()

    function handleOpenCloseDropdown() {
        setDropdownIsOpen(!dropdownIsOpen)
    }

    function handleLogout() {
        localStorage.removeItem('tokenHeroId')
        navigate('/login')
    }

    return (
        <header className="relative flex flex-row justify-between items-center rounded-2xl -bg-primary shadow-gray-400 shadow-lg py-3 px-6 font-bold text-white">
            <Link to={'/'} className="flex items-center gap-4">
                <img src={logo} alt="" />
                <span>Hero Hairdresses</span>
            </Link>

            <button
                type="button"
                className="flex items-center gap-2"
                onClick={handleOpenCloseDropdown}
            >
                <UserCircle size={24} weight="bold" />
                <span>Perfil</span>
            </button>

            {dropdownIsOpen ? (
                <div className="flex items-center gap-2">
                    {/* <UserCircle size={24} weight="bold" />
                    <span>Perfil</span> */}

                    <div className="relative flex font-normal">
                        <ul className="absolute -bg-primary top-4 right-2 p-0 list-none rounded-lg">
                            <Link
                                to="/schedule"
                                className="px-3 py-4 hover:-bg-primary-50 hover: rounded-lg"
                            >
                                Agendamentos
                            </Link>
                            <Link
                                to="/profile"
                                className="px-3 py-4 hover:-bg-primary-50 hover: rounded-lg"
                            >
                                Editar perfil
                            </Link>
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="px-3 py-4 hover:-bg-primary-50 hover: rounded-lg"
                            >
                                Sair
                            </button>
                        </ul>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </header>
    )
}
