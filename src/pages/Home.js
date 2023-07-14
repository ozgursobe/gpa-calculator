import { HomeMain } from "../components/HomeMain"
import SemesterContextProvider from '../context/SemesterContext';


export const Home = () => {


    return (
        <SemesterContextProvider>
          <HomeMain/>
       </SemesterContextProvider>
    )
}