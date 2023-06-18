import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layout/DefaultLayout";
import { Login } from "../pages/login";
import { Profile } from "../pages/profile";
import { Schedule } from "../pages/schedule";
import { SignUp } from "../pages/signup";


export function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/schedule" element={<Schedule />}/>
                <Route path="/profile" element={<Profile />}/>
            </Route>
            <Route>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>
            </Route>
        </Routes>
    )
}