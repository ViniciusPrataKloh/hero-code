
interface Props{
  placeholder: string;
  type: 'email' | 'password' | 'text' | 'tel' | 'date' | 'time';
}

export function InputTransparent({placeholder, type}: Props){
  return(
    <input type={type} placeholder={placeholder} className="bg-transparent font-light text-base -text-primary px-2 py-2 rounded-2xl -border-primary border-2 focus:outline-none placeholder:-text-primary/70"/>
  )
}