import { ReactNode, createContext, useState } from 'react'

interface IUser {
    id: string
    name: string
    email: string
}

interface IAccountContext {
    user: IUser | null
    handleSetUser: (id: string, name: string, email: string) => void
}

interface IAccountProviderProps {
    children: ReactNode
}

export const AccountContext = createContext({} as IAccountContext)

export function AccountContextProvider({ children }: IAccountProviderProps) {
    const [user, setUser] = useState<IUser | null>(null)

    function handleSetUser(id: string, name: string, email: string) {
        setUser({ id, name, email })
    }

    console.log(user)

    return (
        <AccountContext.Provider value={{ user, handleSetUser }}>
            {children}
        </AccountContext.Provider>
    )
}
