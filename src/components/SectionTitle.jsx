export default function SectionTitle(props){
    const {children} = props
    return (
        <h2 className="pt-8 text-center text-3xl mx-auto pb-4">{children}</h2>
    )
}