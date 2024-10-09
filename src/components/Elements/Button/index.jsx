export default function Button (props){
    const { children, 
            classname='bg-black text-white  rounded-md',
            onClick=()=>{}
            } = props
    return (
        <button
            type="button"
            className={`h-10 px-4 font-bold ${classname}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}