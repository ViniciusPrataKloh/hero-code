import { PencilSimple } from 'phosphor-react'
import { InputTransparent } from '../../components/inputTransparent'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export function Profile() {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('tokenHeroId')

        if (!token) {
            navigate('/login')
        }
    }, [])

    return (
        <section className="mt-8">
            <h2 className="-text-primary text-2xl font-medium mb-2">
                Editar perfil
            </h2>

            <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-end">
                    <div className="rounded-full bg-gradient-to-b -from-primary -to-secondary px-0.5 py-0.5">
                        <img
                            src="http://github.com/ViniciusPrataKLoh.png"
                            className="rounded-full w-[140px] h-[140px] border-primary"
                            alt=""
                        />
                    </div>

                    <label
                        htmlFor="media"
                        className="-bg-primary w-10 h-10 -translate-x-10 rounded-full px-2 py-2 flex items-center justify-center cursor-pointer"
                    >
                        <PencilSimple color="#fff" size={18} weight="fill" />
                        <input type="file" />
                    </label>
                </div>

                <form className="flex flex-col gap-2 mt-8 font-medium -text-primary">
                    <label>Nome</label>
                    <InputTransparent placeholder="Seu nome aqui" type="text" />
                    <label>Email</label>
                    <InputTransparent placeholder="Seu nome aqui" type="text" />
                    <label>Senha atual</label>
                    <InputTransparent placeholder="Seu nome aqui" type="text" />
                    <label>Nova senha</label>
                    <InputTransparent placeholder="Seu nome aqui" type="text" />
                    <label>Confirmar senha</label>
                    <InputTransparent placeholder="Seu nome aqui" type="text" />

                    <div className="mt-10 flex items-start justify-center gap-4">
                        <button className="w-[110px] py-2.5 px-4 border-2 -border-secondary -text-secondary font-semibold rounded-2xl hover:text-white hover:bg-red-400 hover:border-red-500 transition-colors">
                            Cancelar
                        </button>
                        <button className="w-[110px] py-2.5 px-4 border-2 -bg-secondary -border-secondary text-white font-semibold rounded-2xl hover:-bg-secondary-50 hover:-border-secondary-50 transition-colors">
                            Editar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
