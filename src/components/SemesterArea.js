import { useEffect, useState, useMemo, useCallback, useContext } from "react"
import { SemesterContext } from "../context/SemesterContext"
import { Semester } from "./Semester"



export const SemesterArea = ({ semester }) => {

     const { semesters, dispatch } = useContext(SemesterContext)




    const [classNote, setClassNote] = useState([{
        id: 0,
        course: null,
        grade: null,
        credit: null,

    },
    {
        id: 1,
        course: null,
        grade: null,
        credit: null,

    },
    {
        id: 2,
        course: null,
        grade: null,
        credit: null,

    },
    {
        id: 3,
        course: null,
        grade: null,
        credit: null,

    }
    ])


    const total = useMemo(() => {
     
        const updateTotal = classNote.map(one => {
            if (one.grade && one.credit) {
                return {
                    credit: parseFloat(one.credit),
                    total: (parseFloat(one.grade) * parseFloat(one.credit))
                }

            }
           return null
        }).filter(x => x != null)

      
        return updateTotal
    }, [classNote])


    const updateTotalCredit = useCallback((gpa, totalCredit, totalScore) => {
       

        const updateSemester = semesters.map(sem => {
            if (sem.id === semester.id) {

                return {
                    ...sem,
                    gpa,
                    totalCredit,
                    totalScore
                }

            }
            else {

                return sem
            }
        })
       dispatch({
        type : "UPDATE_SEMESTER",
        semesters : updateSemester
       })

    }, [semester.id, dispatch, semesters])

    

 


    useEffect(() => {
        let totalCredit = null
        let totalScore = null


        if(total.length === 0) {
            totalCredit = 0
            totalScore = 0


        } 
       
      
        else if(total.length !== 0) {
            total.forEach(tot => {
            
                if (tot) {
    
                    totalCredit += tot.credit
                    totalScore += tot.total
    
                }
                
               
               
            })
        }

        

        

        if (totalCredit) {
            updateTotalCredit( parseFloat(totalScore / totalCredit).toFixed(2), totalCredit, totalScore)
        }

        else if(totalCredit === 0) {
            updateTotalCredit (null, totalCredit, totalScore)
        }
    }, [total]) 




    const addClass = () => {
        setClassNote([
            ...classNote,
            {
                id: classNote.length,
                course: null,
                grade: null,
                credit: null
            }
        ])




    }






    return (
        <div className="min-h-[350px] mx-auto  w-[300px] sm:w-[500px] md:w-[700px] lg:w-[800px] mt-12 border-[1px] border-solid border-main-blue   ">
            <h3 className="pl-1 bg-main-blue text-white "> Semester {semester.id} </h3>
            <div>
            <div className=" flex sm:hidden  gap-5 ml-9 mt-3">
                       <span>Ders</span>
                       <span className="ml-7">Not</span>
                       <span className="ml-5">Kredi</span>
                     </div>

                {classNote.map(newClass => (
                
                    <Semester newClass={newClass} key={newClass.id} classNote={classNote} setClassNote={setClassNote} />
                ))}

                {semester.gpa && <div className="flex justify-center"> <div className="w-40 h-40 text-xl md:w-48 md:h-48 bg-lime-300 rounded-full mt-10 md:text-2xl flex flex-col justify-center items-center">
                    <div> Semester {semester.id} SPA </div>
                    <div className="flex justify-center items-center"> {semester.gpa} </div>

                </div> </div>}


                <div className="flex justify-center">
                    <button className="mt-12 mb-5 w-48 h-12 flex justify-center items-center bg-main-blue rounded text-white text-xl" onClick={addClass} >Yeni Ders Ekle </button>
                </div>




            </div>
        </div>
    )
}