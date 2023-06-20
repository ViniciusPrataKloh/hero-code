import { UserCircle } from "phosphor-react";
import logo from "../../assets/header-logo.png";
import { Link } from "react-router-dom";

export function Header(){
  return(
    <header className="flex flex-row justify-between items-center rounded-2xl -bg-primary shadow-gray-400 shadow-lg py-3 px-6 font-bold text-white">
      <Link 
        to={"/"} 
        className="flex items-center gap-4"
      >
        <img src={logo} alt="" />
        <span>Hero Hairdresses</span>
      </Link>

      <Link  
        to="/profile"
        className="flex items-center gap-2"
      >
        <UserCircle size={24} weight="bold"/>
        <span>Perfil</span>
      </Link >
    </header>
  )
}