import { EnvelopeSimple, Key, Person } from 'phosphor-react'
import { InputWhite } from '../../components/inputWhile'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../utils/axios'
import { AxiosError } from 'axios'
import * as zod from 'zod'

import logo from '../../assets/logo.png'

const signUpFormSchema = zod.object({
    name: zod.string(),
    email: zod.string().email('Informe um email válido.'),
    password: zod
        .string()
        .min(6, 'A senha deve conter no mínimo 6 caracteres.'),
})

type signUpFormType = zod.infer<typeof signUpFormSchema>

export function SignUp() {
    const { register, handleSubmit, watch } = useForm<signUpFormType>({
        resolver: zodResolver(signUpFormSchema),
    })

    const navigate = useNavigate()

    async function handleSubmitForm() {
        await api
            .post('users/', {
                name,
                email,
                password,
            })
            .then(() => {
                alert('Usuário criado com sucesso!')
                navigate('/login')
            })
            .catch((reason: AxiosError<{ message: string }>) => {
                console.error(reason.response?.data.message)
                alert(reason.response?.data.message)
            })
    }

    const name = watch('name')
    const email = watch('email')
    const password = watch('password')

    return (
        <div className="bg-signup bg-cover bg-no-repeat">
            <div className="grid min-h-screen grid-cols-2">
                {/* Left */}
                <div className="px-20 py-20 text-gray-50">
                    <header>
                        <span>Home - Área de Cadastro</span>
                    </header>

                    <div className="h-full flex items-center justify-center">
                        <img
                            src={logo}
                            alt=""
                            className="w-[274px] h-[230px]"
                        />
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-center">
                    <div className="bg-gray-50 bg-opacity-20 px-10 py-12 rounded-3xl shadow-2xl shadow-black flex flex-col">
                        <h2 className="mb-8 px-4 text-white text-4xl font-light">
                            Olá, seja bem vindo!
                        </h2>

                        <form
                            className="flex flex-col gap-4"
                            onSubmit={handleSubmit(handleSubmitForm)}
                        >
                            <InputWhite
                                type="text"
                                placeholder="Insira seu nome"
                                icon={<Person size={20} />}
                                id="name"
                                value={name}
                                register={{ ...register('name') }}
                            />
                            <InputWhite
                                type="email"
                                placeholder="Insira seu email"
                                icon={<EnvelopeSimple size={20} />}
                                id="email"
                                value={email}
                                register={{ ...register('email') }}
                            />
                            <InputWhite
                                type="password"
                                placeholder="Insira sua senha"
                                icon={<Key size={20} />}
                                id="password"
                                value={password}
                                register={{ ...register('password') }}
                            />
                            <button
                                type="submit"
                                className="mt-3 py-2 w-full bg-blue-800 text-white font-bold rounded-2xl hover:bg-blue-600 transition-colors"
                            >
                                Cadastrar
                            </button>
                        </form>

                        <span className="mt-4 text-gray-50 text-xs">
                            Já tem cadastro?{' '}
                            <a className="font-bold text-white hover:underline hover:cursor-pointer hover:text-gray-50">
                                Voltar à Página Inicial
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
