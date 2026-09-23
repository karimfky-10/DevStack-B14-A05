import { use, useState } from "react"
import type { CardTypeProps } from "../cardType"
import StackBefore from "./StackBefore"
import CardItems from "../cardItems"
 interface IType{
    CardPromis: Promise<CardTypeProps[]>
}


export function Card({CardPromis}:IType) {
    const cards = use(CardPromis)

    const [Add,Aded] = useState<any>([])

    function handleClick(){
        
    }
  

    return (
     <div className="mt-5xl  ">
        {/* Top Site */}
        <div>
            <h1 className="text-5xl  font-bold">Explore the <span 
            className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6]
            bg-clip-text text-transparent
             ">Technologies</span></h1>
            <p className=" my-3 text-xl">Pick one technology per category to buijld your ideal stack.</p>
            
            {/* main card */}
        </div>

        {/* main card */}
        <div className="flex justify-between gap-7 mt-10">
        <div className=" grid grid-cols-3 justify-between gap-7">
                    {cards.map((items)=> 
            <div key={items.id}           >

            <CardItems props={items} Add={Add} handleClick={handleClick}></CardItems> 
            </div>
        )}
        </div>

        <div className=" w-3xl ">
            {
            //    <StackAfter  ></StackAfter>
            }<StackBefore></StackBefore>
        </div> 
        </div>
       
    </div>

    )
}