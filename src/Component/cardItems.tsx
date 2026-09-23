import Button1 from "./button"
import type { CardTypeProps,} from "./cardType"

interface IProps{
    props:CardTypeProps[]
    Add:boolean,
    handleClick: ()=> void
}

export default function CardItems({props, Add, handleClick}:IProps) {

    return (
        <div className="grid grid-cols-3 gap-5">
            {
              props.map((items:CardTypeProps)=>{

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
            <Button1 Add={Add} handleClick={handleClick}  ></Button1>

                </div>
                
            </div>
           </div>
                    
                )
            })
        }
        </div>
    )
}