import { useContext } from "react"


import { SemesterArea } from "../components/SemesterArea"
import { SemesterContext } from "../context/SemesterContext"



export const HomeMain = () => {

    const { semesters, addSemester, overallGPA, updatePastGPA, updatePastCredit, exceptThisSymbols } = useContext(SemesterContext)

    return (
        <div className="my-[70px]    ">
        <h3 className="flex justify-center text-xl mx-auto  ">Boun GPA Hesaplayıcı</h3>
        <p className="mt-5 text-lg leading-normal mx-auto w-[300px] sm:w-[500px] md:w-[700px] lg:w-[800px] ">Boun GPA Hesaplayıcı, Boğaziçi Üniversitesi öğrencilerinin GPA hesaplamalarını kolayca yapabilmelerini sağlamaktadır. Ek olarak AA/BA/BB ... not sistemini kullanan diğer öğrenciler de kolayca dönem ve genel notlarını hesaplayabilirler.</p>

        <div className="min-h-[150px] mx-auto w-[300px] sm:w-[500px] md:w-[700px] lg:w-[800px]  mt-12 border-2 border-main-blue text-lg ">
            <h3 className=" min-h-[70px] p-3 border-b-2 border-main-blue flex items-center justify-center text-xl">Geçmiş GPA ve Toplam Kredi</h3>

            <div className="mt-3 p-3 flex flex-col justify-center items-center">
              <div>
                 <label htmlFor="past-gpa">Geçmiş GPA:  </label>
                 <input type= "number" min= "0" className="ml-3 w-32 md:w-[150px] h-7 text-lg text-center border border-slate-300 focus:border-sky-500 rounded " id="past-gpa" onChange={updatePastGPA} onKeyDown = { e=> {
                                            
                       return exceptThisSymbols.includes(e.key) && e.preventDefault() 
                 }  }  />
              </div>
             <div className=" mt-5 mb-5">
                <label htmlFor="past-credit">Toplam Kredi:  </label>
                <input type= "number" min= "0" className="ml-3 w-32 md:w-[150px] h-7 text-lg text-center border border-slate-300 focus:border-sky-500 rounded " id="past-credit" onChange={  updatePastCredit } onKeyDown = { e=> {
                  if(e.key === ".") {
                    e.target.value = ","
                  }
                  return exceptThisSymbols.includes(e.key) && e.preventDefault()
                }  }  />
             </div>
             

            </div>
           
        </div>

        {semesters.map(semester => (
               <SemesterArea semester={semester}  key={semester.id} />
        ))}

        <div className="flex justify-center ">
            <button className="mt-12 w-48 h-12 flex justify-center items-center bg-main-blue rounded text-white text-xl  " onClick={addSemester}>Yeni Semester Ekle</button>
        </div>

        { overallGPA && <div className="flex justify-center  "> <div className=" w-40 h-40 text-xl  md:w-48 md:h-48 bg-lime-300 rounded-full mt-10 md:text-2xl flex flex-col justify-center items-center ">
            <div> Overall GPA </div>
            <div className="flex justify-center items-center"> {overallGPA} </div>

        </div> </div>}


    </div>
    )
}