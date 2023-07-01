import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    type: 'text' | 'email' | 'password'
    icon: JSX.Element
    register?: UseFormRegister<FieldValues> | any
}

// interface IconTypeProps {
//     width: number
//     height: number
//     color: string
// }

export function InputWhite({
    placeholder,
    type,
    icon,
    register,
    ...props
}: Props) {
    function onChangeValue() {}

    return (
        <div className="flex items-center gap-2 bg-white rounded-md px-4 py-2 text-md text-black">
            <i>{icon}</i>
            <input
                type={type}
                placeholder={placeholder}
                className="focus:outline-none placeholder:text-gray-400"
                onChange={onChangeValue}
                {...register}
                {...props}
            />
        </div>
    )
}
