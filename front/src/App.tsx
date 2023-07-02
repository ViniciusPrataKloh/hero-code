import { BrowserRouter } from 'react-router-dom'
import { RoutesApp } from './routes/indext'
import { AccountContextProvider } from './contexts/AccountContext'

function App() {
    return (
        <BrowserRouter>
            <AccountContextProvider>
                <RoutesApp />
            </AccountContextProvider>
        </BrowserRouter>
    )
}

export default App
