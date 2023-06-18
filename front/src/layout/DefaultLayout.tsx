import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'


export function DefaultLayout() {
    return (
        <div className='py-12 px-52 mx-auto my-0 max-w-[1440px]'>
          <Header />
          <Outlet />
        </div>
    )
}