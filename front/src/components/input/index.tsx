import { EnvelopeSimple } from "phosphor-react";
import React from "react";

interface Props{
    placeholder: string;
    type: 'email' | 'password';
    icon: JSX.Element;
}

interface IconTypeProps {
    width: number;
    height: number;
    color: string;
  }


export function Input({placeholder, type, icon}: Props){
    return(
        <div className="flex items-center gap-2 bg-white rounded-md px-4 py-2 text-md text-black">
            <i>
                {icon}
            </i>
            <input type={type} placeholder={placeholder} className="focus:outline-none placeholder:text-gray-400"/>
        </div>
    )
}