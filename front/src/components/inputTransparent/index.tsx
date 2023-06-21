interface Props {
    placeholder: string
    type: 'email' | 'password' | 'text' | 'tel' | 'date' | 'time'
    icon?: JSX.Element
}

export function InputTransparent({ placeholder, type, icon }: Props) {
    return (
        <div className="flex gap-2 bg-transparent font-light text-base -text-primary px-2 py-2 rounded-2xl -border-primary border-2 focus:outline-none placeholder:-text-primary/70">
            {icon ? <i>{icon}</i> : <></>}
            <input
                type={type}
                placeholder={placeholder}
                className="bg-transparent focus:outline-none"
            />
        </div>
    )
}
