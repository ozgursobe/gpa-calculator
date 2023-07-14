export const NoteBox = ({ assess, setAssessment, asssesment }) => {

    const removeAssess = () => {
        const newAssesment = asssesment.filter( as => as.id !== assess.id )
        setAssessment(newAssesment)
    }

    const updateName = (e) => {
        setAssessment( asssesment.map( as => {
            if(as.id === assess.id) {
               return {
                ...as,
                name : e.target.value
               }
            }
            else {
                return as
            }
        } ) )
    }

    const updateGrade = (e) => {
        setAssessment( asssesment.map( as => {
            if(as.id === assess.id) {
               return {
                ...as,
                grade : e.target.value
               }
            }
            else {
                return as
            }
        } ) )
    }

    const updatePerc = (e) => {
        
        setAssessment( asssesment.map( as => {
            if(as.id === assess.id) {
               return {
                ...as,
                percentage : e.target.value
               }
            }
            else {
                return as
            }
        } ) )
    }

    return (
        <form className=" mt-4 sm:mt-5 flex  ml-2 sm:ml-4 md:ml-0 items-center gap-2 sm:gap-3 md:gap-0 " >

            <input className="w-32 sm:w-40 md:w-40 h-10 text-center md:ml-10 md:mr-7 lg:ml-14 border border-slate-300 rounded  " type="text" placeholder= {assess.name} onChange = { updateName }  />
            <input className=" w-14 sm:w-32 md:w-36 h-10 text-center md:ml-10 md:mr-7 border lg:ml-14 border-slate-300 rounded " type="number"  onChange = { updateGrade } />
            <input className=" w-14 sm:w-32 md:w-36 h-10 text-center md:ml-10 md:mr-7 border lg:ml-14 border-slate-300 rounded " type="number" onChange = { updatePerc }   />

            <div className=" ml-1 sm:ml-0 md:mr-7">
                <i className="fa-regular fa-circle-xmark fa-lg" onClick={removeAssess}></i>
            </div>

        </form>

    )
}  