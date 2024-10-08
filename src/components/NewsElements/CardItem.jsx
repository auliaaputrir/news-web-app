import ButtonSave from "../ButtonSave";
import ContinueReading from "./ContinueReadingLink";

export default function Card(props) {
    const {children} = props
    return (
        <>
            <div className="container mx-auto max-w-72 hover:shadow-xl">
                <div className="flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white h-full ">

                    {children}

                    
                </div>
            </div>
        </>

    )
}

export function Image(props) {
    const { alt, src } = props
    return (
        <>
            {/* {
                news.multimedia && news.multimedia.length > 0 && news.multimedia[0].url ? ( */}
                    <img
                        alt={alt}
                        src={src}
                        className="h-56 w-full object-cover"
                    />
                {/* ) : ( */}
                    {/* <div className="h-56 w-full bg-gray-200 flex items-center justify-center">
                        No Image Available
                    </div> */}
                {/* )
            } */}

        </>

    )
}
export function Body(props) {
    const { headline, children } = props
    return (
        <div className="p-4 sm:p-6">
            <a href="#">
                <h3 className="text-lg font-medium text-gray-900">
                    {headline}
                </h3>
            </a>

            <p className="mt-2 text-sm text-gray-500">
                {children}
            </p>
        
            <ContinueReading />
        </div>
    )

}
Card.Image = Image
Card.Body = Body