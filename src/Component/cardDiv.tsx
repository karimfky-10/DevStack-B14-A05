import type { CardTypeProps } from "./cardType"

interface PropsItems{
    props:Promise<CardTypeProps[]>
}
export default function CardDiv({props}:PropsItems) {

    return (
        <div className="grid grid-cols-3 gap-3 w-3/4">
        {
            props.map((items:PropsItems)=>{
                return(       
            <div className="mt-10 border border-olive-400 rounded-2xl bg-white">
               <div className=" p-5">
             <div className="flex justify-between">
                <img src={items.icon } alt="" />
            <button className="bg-[items.badgeStyle.backgroundColor] rounded-2xl px-2">{items.badge}</button>
             </div>
             <h1 className="text-xl font-bold mt-3">{items.title}</h1>
             <p className="mt-5 mb-3">A declarative, component-based
                JavaScript library for building modern user
                interfaces.</p>
             <div className="flex justify-between items-center m-3">
                <button>{items.category}</button> 
                <p>{items.level}</p>

                <div>
                    <img src="#" alt="" />
                    <li className="list-none">{items.rating}</li>                    
                </div>
             </div>
             <button className="text-white bg-black w-full h-8 rounded-sm">Add to Stack</button>
            </div>
           </div>
                    
                )
            })
        }      
        </div>
    )
}