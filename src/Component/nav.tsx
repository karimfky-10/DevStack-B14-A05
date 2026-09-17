import logo from "../assets/logo-text.png"
export default function Nav(){
    return(
        

        <div className="flex justify-between my-10   items-center">

            <img src={logo}/>
            <ul className="flex gap-10 text-xl font  ">
                <li ><a href="#" className="text-[#DB2777] ">Home</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="flex gap-6 text-xl ">

                <button className=" ">Sign in</button>
                <button className="bg-[#DB2777] w-28 h-10 rounded-4xl text-white ">Sign Up</button>
            </div>
         </div>
        
        
    )
}