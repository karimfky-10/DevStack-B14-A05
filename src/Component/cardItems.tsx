
import type { CardTypeProps } from "./cardType";

interface IProps {
  props: CardTypeProps;

  handleClick: (
    id: number,
    icon: string,
    title: string,
    category: string
  ) => void;

  isAdded: boolean;
}

export default function CardItems({
  props,
  handleClick,
  isAdded,
}: IProps) {

  return (
    <div className="mt-3 h-full border border-olive-200 rounded-2xl bg-white">

      <div className="p-7">

        {/* Icon + Badge */}
        <div className="flex justify-between">

          <img
            src={props.icon}
            alt=""
          />

          <div
            style={{
              backgroundColor:
                props.badgeStyle.backgroundColor,

              color:
                props.badgeStyle.textColor,

              borderColor:
                props.badgeStyle.borderColor,
            }}
            className="rounded-2xl text-md px-2 border h-7"
          >
            {props.badge}
          </div>

        </div>


        {/* Title */}
        <h1 className="text-2xl font-bold mt-2">
          {props.title}
        </h1>


        {/* Description */}
        <p className="mt-4 mb-3">
          {props.description}
        </p>


        {/* Category + Level + Rating */}
        <div className="flex justify-between items-center m-3 mt-7">

          <button>
            {props.category}
          </button>

          <p>
            {props.level}
          </p>

          <div className="flex justify-between items-center gap-1">

            <img
              className="w-4 h-4"
              src="https://img.icons8.com/emoji/48/star-emoji.png"
              alt="star"
            />

            <li className="list-none">
              {props.rating}
            </li>

          </div>

        </div>


        {/* Add / Added Button */}
        <button
          onClick={() =>
            handleClick(
              props.id,
              props.icon,
              props.title,
              props.category
            )
          }

          className={
            !isAdded
              ? "text-white bg-black w-full h-8 rounded-sm"
              : "text-black bg-olive-100 border border-olive-300 w-full h-8 rounded-sm"
          }
        >
          {!isAdded ? "Add to Stack" : "Added"}
        </button>

      </div>

    </div>
  );
}