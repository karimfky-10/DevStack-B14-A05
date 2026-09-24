
// {handleClick}:{handleClick:()=> void}
interface AddedCard {
  id: number;
  icon: string;
  title: string;
  category: string;
}

interface IProps {
  add: AddedCard[];

  handleRemove: (id: number) => void;

  handleAllRemove: () => void;
}

export default function StackAfter({
  add,
  handleRemove,
  handleAllRemove,
}: IProps) {

  return (
    <div className= "border border-xl border-olive-200 rounded-2xl p-5">

      {/* Header */}
      <div className=" items-center">

        <h2 className="text-3xl font-bold">
          Your Stack
        </h2>
        <p
        className="text-[#94A3B8] text-xl mt-5"
        >{add.length} Technology Selected</p>
      </div>
      {/* Added Cards */}
      <div className="mt-5">

        {add.map((item) => (

          <div
            key={item.id}
            className="
              flex
              items-center
              justify-between
              border
              border-olive-200
              rounded-lg
              p-3
              mb-3
            "
          >

            {/* Left side */}
            <div className="flex items-center gap-3">

              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10"
              />

              <div>

                <h3 className="font-bold">
                  {item.title}
                </h3>

                <p className="text-sm">
                  {item.category}
                </p>

              </div>

            </div>


            {/* Cross */}
            <button
              onClick={() =>
                handleRemove(item.id)
              }

              className="text-olive-400 text-xl"
            >
              ✕
            </button>

          </div>

        ))}

      </div>
        <div className="mt-12 py-2 text-center border border-red-500 rounded-xl">
            <button
          onClick={handleAllRemove}
          className="text-red-500 text-xl font-semibold"
        >
          All Remove
        </button>
        </div>
    </div>
  );
}