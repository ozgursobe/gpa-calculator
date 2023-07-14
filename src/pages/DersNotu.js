import { useEffect, useState } from "react"
import { NoteBox } from "../components/NoteBox"


export const DersNotu = () => {

    const [assessment, setAssessment] = useState([{
        id : 0,
        name: "Vize",
        grade: null,
        percentage: null
    },
    {
        id : 1,
        name: "Final",
        grade: null,
        percentage: null
    },
    {
        id : 2,
        name: "Quiz",
        grade: null,
        percentage: null
    },
    {
        id : 3,
        name: "Ödev",
        grade: null,
        percentage: null
    }

    ])

  
   useEffect( () => {
     setErr(null)
     let gradeforPerc = null
     let totalPerc = 0
     let totalGradeForPerc = null
    
     assessment.forEach( assess => {
        if(assess.grade && assess.percentage) {
            totalPerc +=  parseFloat(assess.percentage)
            if(totalPerc > 100) {
                setErr("Derslerinizin toplam yüzdesi 100'den fazla olamaz!")
            }
            else {
                gradeforPerc += (( parseFloat(assess.grade) * parseFloat(assess.percentage)  ) / 100)
                totalGradeForPerc = gradeforPerc.toFixed(2)
            }

        }

     })  

     setGrade(totalGradeForPerc)

   }, [assessment])

   const [err, setErr] = useState(null)


    const addAssess = () => {
        setAssessment([
            ...assessment,
            {   
                id : assessment.length,
                name: "Diğer",
                grade: null,
                percentage: null
            }
        ])
     
    }

    
    const [grade, setGrade] = useState(null)

    

    const [title, setTitle] = useState("Ders Adı")

    const updateTitle = (e) => {
        setTitle(e.target.value)
    }

    return (
        <div className="my-[70px]  ">
            <h3 className="flex justify-center text-xl">Ders Notu Hesaplama</h3>
            <p className="mt-5 text-lg leading-normal mx-auto w-[300px] sm:w-[500px] md:w-[700px] lg:w-[800px]">
                Ders Notu Hesaplama ile öğrenciler belirli bir dersin vize, final ve ödevlerinin notlarını ve ağırlıklarını girererek aldıkları dersin ağırlıklı ortalamasını hesaplayabilirler.
            </p>
            <div className="mt-12 border-[1px] border-solid border-main-blue rounded min-h-[420px]  mx-auto w-[320px] sm:w-[500px] md:w-[700px] lg:w-[800px] ">
                <div className=" pl-1 sm:pl-4 h-15 bg-main-blue text-white flex items-center">
                    <input className="h-8 m-2 w-32 sm:w-48 border-0 rounded text-center text-xl bg-blue-400 placeholder:text-white" type="text  " placeholder= {title} onChange={updateTitle} />
                </div>
                <div className="mt-2 flex  gap-3 sm:gap-14 md:gap-24 lg:gap-0">
                  <p className=" text-sm sm:text-lg md:text-xl underline ml-3 sm:ml-7 md:ml-12 lg:ml-14 ">Değerlendirmeler</p>
                  <p className=" text-sm sm:text-lg md:text-xl underline ml-6 sm:ml-4  md:ml-7 lg:ml-36 ">Not</p>
                  <p className=" hidden sm:block text-sm  sm:text-lg md:text-xl underline sm:ml-5 md:ml-10 lg:ml-[150px] ">Notun Yüzdesi</p>
                  <p className=" block sm:hidden text-sm  sm:text-lg md:text-xl underline ml-6 sm:ml-5 md:ml-10 lg:ml-[150px] ">Yüzde</p>

                </div>
              
                {assessment.map( assess  => (
                  <NoteBox assess = { assess } setAssessment = { setAssessment } key = { assess.id } asssesment = { assessment} />
                  )
                )}

                 

                <div className="mt-6 mb-2 ml-2 sm:ml-4 md:ml-14 ">
                    <button className=" w-44 sm:w-[180px] md:w-[190px] h-10 text-xl bg-main-blue rounded text-white    " onClick={ addAssess}>  Değerlendirme Ekle</button>
                </div>

                { grade && !err && <div className="flex mb-2 ">
                  <div className="w-full h-12 mx-2 sm:mx-7 text-black bg-grade-bar mt-7 mb-2 text-lg  sm:text-2xl rounded flex flex-col items-center justify-center   " >

                   Dersinizin ağırlıklı ortalaması : { grade }
                   

                      </div>  </div>    }

                      {
                        err &&  <div className="flex mb-2">
                        <div className="w-full h-12 mx-2 sm:mx-7 text-black bg-grade-bar mt-7 mb-2 p-2 text-lg sm:text-2xl rounded flex flex-col items-center justify-center" >
      
                         { err }
                         
      
                            </div>  </div> 
                      }



          
               
               
           

            </div>
        </div>
    )
}