import { EnvelopeSimple, Key } from "phosphor-react";
import logo from "../../assets/logo.png";
import { Input } from "../../components/input";

export function Login(){
    return(
        <div className="bg-login bg-cover bg-no-repeat">
            <div className="grid min-h-screen grid-cols-2">

                {/* Left */}
                <div>

                </div>

                {/* Right */}
                <div className="flex flex-col items-center justify-center gap-8">
                    <img src={logo} alt=""/>

                    <div className="bg-gray-50 bg-opacity-20 px-10 py-12 rounded-3xl shadow-2xl shadow-black flex flex-col">
                        <h2 className="mb-8 px-4 text-white text-4xl font-light">Olá, seja bem vindo!</h2>

                        <form className="flex flex-col gap-4">
                            <Input type="email" placeholder="E-mail" icon={<EnvelopeSimple size={20}/>}/>
                            <Input type="password" placeholder="Senha" icon={<Key size={20}/>}/>
                            <button className="mt-3 py-2 w-full bg-blue-800 text-white font-bold rounded-2xl hover:bg-blue-600 transition-colors">Entrar</button>
                        </form>

                        <span className="mt-4 text-gray-50 text-xs">Esqueceu sua senha? <a className="font-bold text-white underline hover:cursor-pointer hover:text-gray-50">Recuperar</a></span>
                        <span className="mt-1 text-gray-50 text-xs">Ainda não tem conta?  <a className="font-bold text-white underline hover:cursor-pointer hover:text-gray-50">Cadastre-se</a></span>
                    </div>
                </div>

            </div>
        </div>
    )
}