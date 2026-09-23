import Button1 from "./button"
import type { CardTypeProps,} from "./cardType"

interface IProps{
    props:Promise<CardTypeProps[]>
    Add:boolean,
    handleClick: ()=> void
}

export default function CardItems({props, Add, handleClick}) {

    return (
      
            <div
             className=" border border-olive-400 rounded-2xl bg-white ">
               <div className=" p-7">
             <div className="flex justify-between">
                <img src={props.icon } alt="" />
            <div style={{
                backgroundColor: props.badgeStyle.backgroundColor,
                color:props.badgeStyle.textColor,
                borderColor: props.badgeStyle.borderColor
            }}
            className="rounded-2xl text-md px-2 border h-7"
            >{props.badge}</div>
             </div>
             <h1 className="text-2xl font-bold mt-2 ">{props.title}</h1>
             <p className="mt-4 mb-3">{props.description}</p>
             <div className="flex justify-between items-center m-3 mt-7 ">
                <button>{props.category}</button> 
                <p>{props.level}</p>

                <div className="flex justify-between items-center gap-1">
                    <img className="w-4 h-4" src="https://img.icons8.com/emoji/48/star-emoji.png" alt="star" />
                    <li className="list-none">{props.rating}</li>                    
                </div>
             </div>
                <div>
            <Button1 Add={Add} handleClick={handleClick} id={props.id} ></Button1>

                </div>
                
            </div>
           </div>
    )
}