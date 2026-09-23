import { use, useState } from "react"
import type { CardTypeProps } from "../cardType"
import StackBefore from "./StackBefore"
import StackAfter from "./StackAfter"
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

        {/* <CardItems props={cards} Add={Add} handleClick={handleClick}></CardItems>  */}
          <div className="grid grid-cols-3 gap-5">
                     {
                       cards.map((items:CardTypeProps)=>{
                              
                        
                         return(       
                     <div
                      key={items.id} 
                      className=" border border-olive-400 rounded-2xl bg-white ">
                        <div className=" p-7">
                      <div className="flex justify-between">
                         <img src={items.icon } alt="" />
                     <div style={{
                         backgroundColor: items.badgeStyle.backgroundColor,
                         color:items.badgeStyle.textColor,
                         borderColor: items.badgeStyle.borderColor
                     }}
                     className="rounded-2xl text-md px-2 border h-7"
                     >{items.badge}</div>
                      </div>
                      <h1 className="text-2xl font-bold mt-2 ">{items.title}</h1>
                      <p className="mt-4 mb-3">A declarative, component-based
                         JavaScript library for building modern user
                         interfaces.</p>
                      <div className="flex justify-between items-center m-3 mt-7 ">
                         <button>{items.category}</button> 
                         <p>{items.level}</p>
         
                         <div className="flex justify-between items-center gap-1">
                             <img className="w-4 h-4" src="https://img.icons8.com/emoji/48/star-emoji.png" alt="star" />
                             <li className="list-none">{items.rating}</li>                    
                         </div>
                      </div>
                         <div>
                     {/* <Button1 Add={Add} handleClick={handleClick} id={items} ></Button1> */}
                  <button
                onClick={()=> Aded(items.id)}
                className={Add?  
               `text-white bg-black w-full h-8 rounded-sm`
                 :`text-black-500 bg-olive-100 border border-olive-300 w-full h-8 rounded-sm`}
                >{Add ? 'Add to Stack' : 'Aded'}
                </button>
         
                         </div>
                         
                     </div>
                    </div>
                             
                         )
                     })
                 }
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