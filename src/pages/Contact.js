import { BsLinkedin } from "react-icons/bs";

export const Contact = () => {
    return (
        <div className=" w-[320px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] mx-auto" > 
           <p className="mt-32 text-xl sm:text-3xl text-main-blue"> Hello, I'm Özgür Söbe.</p> 
           <p className="mt-5 text-lg sm:text-xl ">
            If you have any suggestions, feedback, or any questions about the website, you can reach out to me through my linkedin account below.
            </p>
            <div className="mt-10 flex items-center">
                <p className="text-xl">For My LinkedIn Account : </p>
                <a className="ml-3 text-linkedn-blue" href="https://www.linkedin.com/in/%C3%B6zg%C3%BCr-s%C3%B6be-5a8a27270/">   <BsLinkedin className= { "text-center w-8 h-8 rounded-full" }   /></a>
            </div>
         
           
  
        
        </div>
    )
}