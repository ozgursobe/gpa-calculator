import { NavLink } from "react-router-dom"
import { CgMenu } from "react-icons/cg"
import { useState } from "react"

export const Navbar = (  ) => {

    const [isMenu , setIsMenu ] = useState(false)

    const updateIsMenu = () => {
        setIsMenu( state => !state )
    }
   
    return (
        <div className="sticky   top-0  min-h-[150px] bg-main-blue ">
           <div className="pt-4 flex items-center justify-between">
           <div className="flex gap-4 lg:gap-4 xl:gap-5 items-center text-white">
              <img className=" w-16 h-16   sm:w-20 sm:h-20 rounded-full mt-5 ml-6 sm:ml-10" src="../img/boun_logo.jpg" alt="bounlogo" />
             <> <h3 className="mt-8 sm:text-lg lg:text-lg xl:text-[22px] ">Boğaziçi Üniversitesi <span  className="hidden sm:inline sm:text-lg lg:text-lg xl:text-[22px]">GPA Hesaplayıcı</span> <p className="sm:hidden" >GPA Hesaplayıcı</p> </h3></> 
              
            </div>

            <nav className="mt-8 hidden lg:block lg:ml-7 xl:ml-0 2xl:mr-24">
                <NavLink className=" lg:mr-3  xl:mr-8 text-lg xl:text-xl text-white [&.active]:text-gray-400" to= "/" >GPA Hesaplama</NavLink>
                <NavLink className=" lg:mr-3  xl:mr-8 text-lg xl:text-xl text-white [&.active]:text-gray-400" to= "/dersnotu" >Ders Notu Hesaplama</NavLink>
                <NavLink className="  lg:mr-3 xl:mr-8 text-lg xl:text-xl text-white [&.active]:text-gray-400" to= "/hakkinda" >Nasıl Hesaplanır</NavLink>
                <NavLink className="  lg:mr-3 xl:mr-8 text-lg xl:text-xl text-white [&.active]:text-gray-400" to= "/iletisim" >İletişim</NavLink>
            </nav>

            <CgMenu className=" w-10 h-10 text-white mt-8 mr-5 sm:mr-10 lg:hidden" onClick={ updateIsMenu } />
           </div>
           
           

            { isMenu && <> <hr className=" mt-6" /> <nav className=" flex flex-col gap-3 ml-10 mt-5 pb-4 sm:text-lg text-white ">
                <NavLink  to= "/" onClick={ updateIsMenu } >GPA Hesaplama</NavLink>
                <NavLink  to= "/dersnotu" onClick={ updateIsMenu } >Ders Notu Hesaplama</NavLink>
                <NavLink  to= "/hakkinda" onClick={ updateIsMenu } >Nasıl Hesaplanır</NavLink>
                <NavLink  to= "/iletisim" onClick={ updateIsMenu } >İletişim</NavLink>
            </nav> </> }
            
        </div>
    )
}