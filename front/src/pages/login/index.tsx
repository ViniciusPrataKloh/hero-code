import { EnvelopeSimple, Key } from 'phosphor-react'
import { InputWhite } from '../../components/inputWhile'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../utils/axios'
import { AxiosError, AxiosResponse } from 'axios'
import * as zod from 'zod'

import logo from '../../assets/logo.png'

const signInFormSchema = zod.object({
    email: zod.string().email('Informe um email válido.'),
    password: zod.string(),
})

type signInFormType = zod.infer<typeof signInFormSchema>

export function Login() {
    const { register, handleSubmit, watch } = useForm<signInFormType>({
        resolver: zodResolver(signInFormSchema),
    })

    const navigate = useNavigate()

    async function onHandleSubmit() {
        await api
            .post('users/auth', {
                email,
                password,
            })
            .then((response: AxiosResponse) => {
                const token = response.data.token
                localStorage.setItem('tokenHeroId', token)
                navigate('/')
            })
            .catch((reason: AxiosError<{ message: string }>) => {
                console.error(reason.response?.data.message)
            })
    }

    const email = watch('email')
    const password = watch('password')

    return (
        <div className="bg-login bg-cover bg-no-repeat">
            <div className="grid min-h-screen grid-cols-2">
                {/* Left */}
                <div></div>

                {/* Right */}
                <div className="flex flex-col items-center justify-center gap-8">
                    <img src={logo} alt="" />

                    <div className="bg-gray-50 bg-opacity-20 px-10 py-12 rounded-3xl shadow-2xl shadow-black flex flex-col">
                        <h2 className="mb-8 px-4 text-white text-4xl font-light">
                            Olá, seja bem vindo!
                        </h2>

                        <form
                            className="flex flex-col gap-4"
                            onSubmit={handleSubmit(onHandleSubmit)}
                        >
                            <InputWhite
                                type="email"
                                placeholder="Email"
                                icon={<EnvelopeSimple size={20} />}
                                id="email"
                                value={email}
                                register={{ ...register('email') }}
                            />
                            <InputWhite
                                type="password"
                                placeholder="Senha"
                                icon={<Key size={20} />}
                                id="password"
                                value={password}
                                register={{ ...register('password') }}
                            />
                            <button
                                type="submit"
                                className="mt-3 py-2 w-full bg-blue-800 text-white font-bold rounded-2xl hover:bg-blue-600 transition-colors"
                            >
                                Entrar
                            </button>
                        </form>

                        <span className="mt-4 text-gray-50 text-xs">
                            Esqueceu sua senha?{' '}
                            <a className="font-bold text-white hover:underline hover:cursor-pointer hover:text-gray-50">
                                Recuperar
                            </a>
                        </span>
                        <span className="mt-1 text-gray-50 text-xs">
                            Ainda não tem conta?{' '}
                            <a className="font-bold text-white hover:underline hover:cursor-pointer hover:text-gray-50">
                                Cadastre-se
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
