interface IType{
    Add: boolean,
    handleClick: ()=> any,
    id:any
}
export default function Button1({Add, handleClick, id}:IType) {
    return (
        <div>
             <button
                onClick={()=> handleClick(id.id)}
                className={Add? `text-white bg-black w-full h-8 rounded-sm` 
                :`text-black-500 bg-olive-100 border border-olive-300 w-full h-8 rounded-sm`}
                >{Add ? 'Add to Stack' : 'Aded'}
                </button>
        </div>
    )
}