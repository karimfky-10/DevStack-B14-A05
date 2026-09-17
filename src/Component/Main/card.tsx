import { use } from "react"
import type { CardTypeProps } from "../cardType"
import CardDiv from "../cardDiv"
 interface IType{
    CardPromis: Promise<CardTypeProps[]>
}


export function Card({CardPromis}:IType) {
    const cards = use(CardPromis)

    return (
     <div className="mt-5xl">
        
        <div>
            <h1 className="text-5xl  font-bold">Explore the <span 
            className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6]
            bg-clip-text text-transparent
             ">Technologies</span></h1>
            <p className=" my-3 text-xl">Pick one technology per category to buijld your ideal stack.</p>
            
            {/* main card */}
        </div>
        {/* main card */}
         <CardDiv props={cards}></CardDiv>

        <div className="w-1/4"></div>
       
    </div>

    )
}