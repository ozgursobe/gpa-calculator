import { createContext } from "react";
import { useReducer, useState, useCallback, useEffect } from "react";

import semestersReducer from "../reducers/semesterReducer"


export const SemesterContext = createContext()

 const SemesterContextProvider = ( { children } ) => {

    const [semesters, dispatch] = useReducer(semestersReducer, [{
        id: 1,
        gpa: null,
        totalCredit: null,
        totalScore: null
    }] )


    const [overallGPA, setOverallGPA] = useState(null)

    const [pastGPA, setPastGPA] = useState({
        pastGPA : null,
        pastCredit : null
    })

    const exceptThisSymbols = ["e", "E", "+", "-"];

    const addSemester = () => {
         dispatch( {
            type : "ADD_SEMESTER",
         })

       
    }


    const updatePastGPA = (e) => {

        
        
        let val = e.target.value

      
      
      setPastGPA(state => {
        return {
            ...state,
            pastGPA : parseFloat(val) 
        } 
      })
    }

    const updatePastCredit = (e) => {
        setPastGPA(state => {
            return {
                ...state,
                pastCredit : parseInt(e.target.value) 
            } 
          })
    }

    const calculateAllGPA = useCallback( () => {

        let allCredit = null
        let allScore = null
        let isCalc = true

        semesters.forEach(semester => {
            if (semester.gpa) {
                allCredit += semester.totalCredit
                allScore += semester.totalScore
                isCalc = false
            }
            else if( !semester.gpa && isCalc ) {
                allCredit = 0
                allScore = 0
            }
           
        })

      

        if(allCredit && (!pastGPA.pastGPA || !pastGPA.pastCredit) ) {
            setOverallGPA(parseFloat(allScore / allCredit).toFixed(2))
        }
        else if( allCredit && pastGPA.pastGPA && pastGPA.pastCredit ) {
           
            let finalGPA = (  ((pastGPA.pastGPA * pastGPA.pastCredit) + allScore ) / ( pastGPA.pastCredit + allCredit ) ).toFixed(2)
            setOverallGPA(finalGPA)
        }
        
        else if(allCredit === 0 && isCalc && pastGPA.pastGPA) {
           
            setOverallGPA(pastGPA.pastGPA.toFixed(2))
        }
       

        else if(allCredit === 0 && isCalc && !pastGPA.pastGPA) {
        
            setOverallGPA(null)
        } 


        

    }, [semesters, pastGPA] )

    useEffect(() => {
        calculateAllGPA()
    }, [  calculateAllGPA ,semesters] )


    

    return (
        <SemesterContext.Provider value={ { semesters, dispatch, addSemester, overallGPA, updatePastGPA, updatePastCredit, exceptThisSymbols} } >
            { children }
        </SemesterContext.Provider>
    )
}

export default SemesterContextProvider