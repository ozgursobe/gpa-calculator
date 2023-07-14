import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export const MainLayout = () => {

    return (
        <div className="app">

            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}