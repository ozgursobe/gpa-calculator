const semestersReducer = (state, action) => {
    switch(action.type) {
        case "ADD_SEMESTER" :
            return [
                ...state,
                {
                    id : state.length + 1,
                    gpa : null,
                    totalCredit: null,
                    totalScore: null
                }
            ]
         case "UPDATE_SEMESTER" : 
           return action.semesters 
           
         default : 
          return [
            ...state
          ]
    }
} 

export default semestersReducer