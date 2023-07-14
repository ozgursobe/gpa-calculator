
export const FAQ = ( {item, faq, setFAQ} ) => {
     
    const setActive = () => {
       const updateActive = faq.map( one => {
            if(one.id === item.id) {
               return {
                    ...one,
                    active : !one.active
               }
            }
           return one
        } )

       setFAQ( updateActive ) 
  
    }
    


    return (
        <>
        <div className=" mt-7 h-12 border border-main-blue rounded flex items-center justify-between cursor-pointer" onClick={ setActive } >
                <p className={ `flex pl-3 pt-[5px] items-center  ${ item.active ? "text-main-blue" : "text-black"} `}> { item.question } </p>
                <i className="fa-solid fa-angle-down fa-lg mr-6 mt-2"></i>
              </div>
              <div className= { `mx-2 p-5 min-h-[100px] border border-main-blue rounded  ${ item.active ? "block" : "hidden"} `  }  > { item.answer }  </div>
      
       </>
    )
}