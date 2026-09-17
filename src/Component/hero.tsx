import hero from "../assets/banner-stack.png"

export default function Hero() {
    
    return (
        <div className="flex justify-between items-center py-5  mx-auto">
            <div className="w-110">
                <h1 className="font-bold text-5xl">Build Your Ideal</h1>
                <h1 className="font-bold text-5xl bg-gradient-to-r 
                from-[#FF5722] via-[#D81B7E] to-violet-500
                bg-clip-text text-transparent
                 ">Development Stack</h1>
                <p className="mt-5">Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</p>
                <div className="flex gap-5  font-bold h-10 mt-12 ">
                    <button className="
                    bg-gradient-to-r from-[#F97126] to-[#EC4899] 
                     text-white w-50 rounded-[5px]"

                    >Explore Technologies</button>
                     <button className="
                     border border-olive-200 text-olive-600  w-40 rounded-[5px]">Learn More</button>
                </div>
            </div>
            <div>
                <img src={hero} alt="" />
            </div>
        </div>
    )
}