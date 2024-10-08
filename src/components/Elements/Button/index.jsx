export default function Button (props){
    const { children, 
            clasname='bg-black text-white h-10 px-6 font-bold rounded-md',
            onClick
            } = props
    return (
        <button
            type="button"
            className={clasname}
            onClick={onClick}
        >
            {children}
        </button>
    )
}