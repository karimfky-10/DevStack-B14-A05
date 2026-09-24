
// interface IType{
//     CardPromis: Promise<CardTypeProps[]>
// }
// interface AddCard{
//     id: number,
//     icon: string,
//     title: string,
//     category: string
// }

// export default function Card({CardPromis}:IType) {
//     const cards = use(CardPromis)
//     const [Add,setAdd] = useState<AddCard[]>([])
//     function handleClick(id: string,icon: string, title: string,category:string){
//         const nweItems= {
//             id: id,
//             icon: icon,
//             title: title,
//             category:category,
//         }
//         const alrediAded = Add.some((item)=> item.id == id)
//         if (alrediAded){
//             setAdd((prev)=> prev.filter(()))
//         }
//         setAdd( [...Add , nweItems])
//         function removed (){
//             setAdd([])
//         }
//     }
// console.log(Add)
//     return (
//      <div className="mt-5xl  ">
//         {/* Top Site */}
//         <div>
//             <h1 className="text-5xl  font-bold">Explore the <span 
//             className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6]
//             bg-clip-text text-transparent
//              ">Technologies</span></h1>
//             <p className=" my-3 text-xl">Pick one technology per category to buijld your ideal stack.</p>
            
//             {/* main card */}
//         </div>

//         {/* main saction */}
//         <div className="flex justify-between gap-7 mt-10">
//             {/* Cards items */}
//         <div className=" grid grid-cols-3 justify-between gap-7">
//                     {cards.map((items)=> 
//             <div key={items.id}>

//             <CardItems props={items} handleClick={ handleClick }></CardItems> 
//             </div>
//         )}
//         </div>
//         {/* Stack site */}
//         <div className=" w-3xl ">
//             {
//               !Add ==[] ? <StackAfter   add={Add} ></StackAfter>:
//             <StackBefore></StackBefore>
//             }
//         </div> 
//         </div>
       
//     </div>

//     )
// }



import { use, useState } from "react";
import type { CardTypeProps } from "../cardType";
import StackAfter from "./StackAfter";
import CardItems from "../cardItems";

interface IType {
  CardPromis: Promise<CardTypeProps[]>;
}

interface AddedCard {
  id: number;
  icon: string;
  title: string;
  category: string;
}

export default function Card({ CardPromis }: IType) {
  const cards = use(CardPromis);

  const [add, setAdd] = useState<AddedCard[]>([]);

  // Add অথবা Remove
  function handleClick(
    id: number,
    icon: string,
    title: string,
    category: string
  ) {
    const alreadyAdded = add.some((item) => item.id === id);

    if (alreadyAdded) {
      // Remove
      setAdd((prev) =>
        prev.filter((item) => item.id !== id)
      );
    } else {
      // Add
      setAdd((prev) => [
        ...prev,
        {
          id,
          icon,
          title,
          category,
        },
      ]);
    }
  }

  // All Remove
  function handleAllRemove() {
    setAdd([]);
  }

  // Cross দিয়ে Remove
  function handleRemove(id: number) {
    setAdd((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  return (
    <div className="mt-5xl">

      {/* Top Site */}
      <div>
        <h1 className="text-5xl font-bold">
          Explore the{" "}
          <span
            className="
              bg-gradient-to-r
              from-[#EC4899]
              to-[#8B5CF6]
              bg-clip-text
              text-transparent
            "
          >
            Technologies
          </span>
        </h1>

        <p className="my-3 text-xl">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>


      {/* Main Section */}
      <div className="flex justify-between gap-7 mt-10">

        {/* Cards */}
        <div className="grid grid-cols-3 justify-between gap-7">

          {cards.map((items) => (
            <div key={items.id}>

              <CardItems
                add={add}
                props={items}
                handleClick={handleClick}
                isAdded={add.some(
                  (item) => item.id === items.id
                )}
              />

            </div>
          ))}

        </div>


        {/* Your Stack */}
        <div className="w-3xl">

          <StackAfter
            add={add}
            handleRemove={handleRemove}
            handleAllRemove={handleAllRemove}
          />

        </div>

      </div>
    </div>
  );
}