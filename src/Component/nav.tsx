import logo from "../assets/logo-text.png"
import menu from "../assets/hamburger.png"
export default function Nav(){
    return(
        <>
        <div className="sticky top-0  bg-white z-50">

        <div className="flex justify-between lg:py-7  items-center py-2 px-4 ">
            <img className="lg:hidden md:hidden" src={menu} alt="Menu" />
            <img className=":justify-center" src={logo}/>
            <ul className="lg:flex md:flex md:gap-7 md:font-bold lg:gap-10 md:text-balance lg:text-xl font hidden ">
                <li ><a href="#" className="text-[#DB2777] ">Home</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="flex  gap-4 text-sm md:text-base lg:gap-6 lg:text-xl ">

                <button className=" font-bold rounded-2xl md:w-24 lg:w-28  lg:h-10 lg:rounded-4xl text-olive-700 ">Sign in</button>
                <button className="py-1 px-4 rounded-2xl bg-[#DB2777] md:w-24 lg:w-28 md:h-8 lg:h-10 lg:rounded-4xl text-white ">Sign Up</button>
            </div>
         </div>
            <div className="border-b border-gray-300"></div>
        
        </div>
         
      </>
    )
}