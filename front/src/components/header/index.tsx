import { UserCircle } from 'phosphor-react'
import logo from '../../assets/header-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AccountContext } from '../../contexts/AccountContext'

export function Header() {
    const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false)

    const navigate = useNavigate()

    const { user } = useContext(AccountContext)

    function handleOpenCloseDropdown() {
        setDropdownIsOpen(!dropdownIsOpen)
    }

    function handleLogout() {
        localStorage.removeItem('tokenHeroId')
        navigate('/login')
    }

    return (
        <header className="flex flex-col rounded-2xl -bg-primary shadow-gray-400 shadow-lg py-3 px-6 font-bold text-white">
            <div className="flex flex-row justify-between">
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
                    <span>{user ? user.name : 'Perfil'}</span>
                </button>
            </div>

            {dropdownIsOpen ? (
                <div className="relative items-center justify-center gap-2">
                    {/* <UserCircle size={24} weight="bold" />
                    <span>Perfil</span> */}

                    <div className=" font-normal">
                        <ul className="flex flex-col items-center absolute -bg-primary top-0 right-0 list-none rounded-lg shadow-black/70 shadow-md">
                            <Link
                                to="/schedule"
                                className="w-full px-3 py-4 items-center justify-center hover:-bg-primary-50 hover: rounded-lg"
                            >
                                Agendamentos
                            </Link>
                            <Link
                                to="/profile"
                                className="w-full px-7 py-4 items-center justify-center hover:-bg-primary-50 hover: rounded-lg"
                            >
                                Editar perfil
                            </Link>
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="w-full px-3 py-4 items-center justify-center hover:-bg-primary-50 hover: rounded-lg"
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
