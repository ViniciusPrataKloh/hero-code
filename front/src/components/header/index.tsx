import { UserCircle } from "phosphor-react";
import logo from "../../assets/header-logo.png";

export function Header(){
  return(
    <header className="flex flex-row justify-between items-center rounded-2xl -bg-primary py-3 px-6 font-bold text-white">
      <div className="flex items-center gap-4">
        <img src={logo} alt="" />
        <span>Hero Hairdresses</span>
      </div>

      <div className="flex items-center gap-2">
        <UserCircle size={24} weight="bold"/>
        <span>Perfil</span>
      </div>
    </header>
  )
}