import { EnvelopeSimple, Key, Person } from "phosphor-react";
import { InputWhite } from "../../components/inputWhile";

import logo from "../../assets/logo.png";

export function SignUp(){
    return (
        <div className="bg-signup bg-cover bg-no-repeat">
            <div className="grid min-h-screen grid-cols-2">

                {/* Left */}
                <div className="px-20 py-20 text-gray-50">
                    <header>
                        <span>Home - Área de Cadastro</span>
                    </header>

                    <div className="h-full flex items-center justify-center">
                        <img src={logo} alt="" className="w-[274px] h-[230px]"/>
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-center">
                    <div className="bg-gray-50 bg-opacity-20 px-10 py-12 rounded-3xl shadow-2xl shadow-black flex flex-col">
                        <h2 className="mb-8 px-4 text-white text-4xl font-light">Olá, seja bem vindo!</h2>

                        <form className="flex flex-col gap-4">
                            <InputWhite type="email" placeholder="Insira seu nome" icon={<Person size={20}/>}/>
                            <InputWhite type="email" placeholder="Insira seu email" icon={<EnvelopeSimple size={20}/>}/>
                            <InputWhite type="password" placeholder="Insira sua senha" icon={<Key size={20}/>}/>
                            <button className="mt-3 py-2 w-full bg-blue-800 text-white font-bold rounded-2xl hover:bg-blue-600 transition-colors">Cadastrar</button>
                        </form>

                        <span className="mt-4 text-gray-50 text-xs">Já tem cadastro? <a className="font-bold text-white hover:underline hover:cursor-pointer hover:text-gray-50">Voltar à Página Inicial</a></span>
                    </div>
                </div>

            </div>
        </div>
    )
}