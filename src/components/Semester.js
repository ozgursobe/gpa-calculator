export const Semester = ( { newClass, classNote, setClassNote } ) => {


    const addCourse = (e) => {
     
        const updateCourseName = classNote.map( note => {
            if(note.id === newClass.id ) {
                return {
                    ...note,
                    course : e.target.value
                }
            }
            else {
                return note
            }
            
         
            
        })
        setClassNote(updateCourseName)  
    }

    const addGrade = (e) => {
        const updateGrade = classNote.map( note => {
            if(note.id === newClass.id ) {
                return {
                    ...note,
                    grade: e.target.value
                }
            }
            else {
                return note
            }
            
         
            
        })
        setClassNote(updateGrade)
          
    }

    const addCredit = (e) => {
     
        const updateCredit = classNote.map( note => {
            if(note.id === newClass.id ) {
                return {
                    ...note,
                    credit : e.target.value
                }
            }
            else {
                return note
            }
            
         
            
        })
        setClassNote(updateCredit) 
        
    }
    

    const removeClass = () => {
        const removeClassNote = classNote.filter(c => newClass.id !== c.id )
        
        setClassNote(removeClassNote)
    }
    


  return (
         <form className="flex items-center mt-3 sm:mt-5 gap-3 sm:gap-5 md:mx-14 lg:mx-0 lg:ml-4 " >
              
               <div className=" sm:text-xl ml-3 lg:flex ">
                 <label className=" hidden sm:inline" htmlFor="course">Ders: </label>
                 <input className="ml-2 lg:ml-5 w-[70px] sm:w-[80px] md:w-[100px] lg:w-[150px] h-7  md:text-lg text-center border border-slate-300 focus:border-sky-500 rounded " type="text" id="course" onChange={ addCourse } />
               </div>
 
               <div className=" sm:text-xl lg:flex">
                 <label className=" hidden sm:inline" htmlFor="grade">Not: </label>
                 <select className="ml-2 lg:ml-5 sm:w-[60px] md:w-[100px] lg:w-[150px] h-7 sm:text-lg text-center border border-slate-300 focus:border-sky-500 rounded" id="grade" onChange={ addGrade }>
                     <option value="">-</option>
                     <option value="4">AA</option>
                     <option value="3.5">BA</option>
                     <option value="3">BB</option>
                     <option value="2.5">CB</option>
                     <option value="2">CC</option>
                     <option value="1.5">DC</option>
                     <option value="1">DD</option>
                     <option value="0">F</option> 
                 </select>
               </div>

              
 
               <div className=" sm:text-xl lg:flex">
                 <label className=" hidden sm:inline" htmlFor="credit">Kredi: </label>
                 <input className=" ml-2 lg:ml-5 w-[50px] sm:w-[60px] md:w-[100px] lg:w-[150px] h-7 text-lg text-center border border-slate-300 focus:border-sky-500 rounded" type="number" id="credit" onChange={ addCredit }  min= "0" />
               </div>

               <div className=" ml-2 sm:mr-2 md:mr-0 md:ml-2  "> 
               <i className="fa-regular fa-circle-xmark fa-lg" onClick={ removeClass }></i>
               </div>
 
             </form>
  )
 
}