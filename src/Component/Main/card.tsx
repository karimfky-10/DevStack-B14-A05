

import { use, useState } from "react";
import type { CardTypeProps } from "../cardType";
import StackAfter from "./StackAfter";
import CardItems from "../cardItems";
import StackBefore from "./StackBefore";

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
    <div className="px-4">

      {/* Top Site */}
      <div>
        <h1 className="text-2xl text-center md:text-start
         lg:text-start md:text-4xl lg:text-5xl font-bold">
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

        <p className="text-center text-sm lg:text-start md:text-start text-olive-500 lg:my-3 lg:text-xl md:text-xl md:my-2.5">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>


      {/* Main Section */}
      <div className="
      md:flex md:justify-between md:gap-7
      lg:flex lg:justify-between lg:gap-7 mt-10">

        {/* Cards */}
        <div className="px-4  lg:grid lg:grid-cols-3 lg:justify-between lg:gap-7
        md:grid md:grid-cols-2 md:justify-between md:gap-7">

          {cards.map((items) => (
            <div key={items.id}>

              <CardItems
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
        <div className="px-4 mt-5 md:w-3xl lg:w-3xl">
          {

            add.length===0?<StackBefore></StackBefore> :<StackAfter
            add={add}
            handleRemove={handleRemove}
            handleAllRemove={handleAllRemove}
            />
          }

        </div>

      </div>
    </div>
  );
}