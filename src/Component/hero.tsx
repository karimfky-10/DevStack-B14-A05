import hero from "../assets/banner-stack.png"

export default function Hero() {
    
    return (
        <div className="px-4 md:h-110 lg:h-150 lg:flex lg:justify-between md:flex md:justify-between  md:items-center lg:items-center   mx-auto">
            <div className="w-100 ">
                <div className="text-center pt-10 lg:text-5xl md:text-4xl text-3xl font-bold">
                <h1 >Build Your Ideal</h1>
                <h1 className=" justify-content   bg-gradient-to-r 
                from-[#FF5722] via-[#D81B7E] to-violet-500
                bg-clip-text text-transparent
                ">Development Stack</h1>
                </div>
                <p className="mt-5 text-center">Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className="flex gap-5 justify-center font-bold h-10 lg:mt-12 mt-7 ">
                    <button className="
                    bg-gradient-to-r from-[#F97126] to-[#EC4899] 
                     text-white w-50 rounded-[5px]"

                    >Explore Technologies</button>
                     <button className="
                     border border-olive-200 text-olive-600 w-50 rounded-[5px]">Learn More</button>
                </div>  
            </div>
            <div className="  md:scale-70 lg:scale-80">
                <img className="w-full scale-130 " src={hero} alt="hero image" />
            </div>
        </div>
    )
}