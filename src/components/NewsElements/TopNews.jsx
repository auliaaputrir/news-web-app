/* eslint-disable react/prop-types */
import ContinueReading from "../Elements/Anchor/ContinueReading"
import Button from "../Elements/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';

export default function TopNews(props) {
    const { children } = props
    return (
        <div className="grid grid-cols-1 gap-8  lg:grid-cols-2 lg:gap-8">
            {children}
        </div>

    )
}

export function Image(props) {
    const { src, alt = 'news image' } = props
    return (
        <div className="h-64 overflow-hidden rounded-lg sm:h-80 lg:min-h-96">
            {src ? (
                 <img
                 alt={alt}
                 src={src}
                 className="inset-0 h-full w-full object-cover"
             />

            ) : (
                <div className="inset-0 h-full w-full bg-gray-200 flex items-center justify-center">
                    No Image Available
                </div>
            )}
           
        </div>
    )
}

export function Body(props) {
    const { headline, children,href, id, handleSave, isSaved } = props
    return (
        <div className="lg:py-10">
            <div className="w-24 h-10 pt-2 pl-3  mb-5 bg-red-600 text-white ">
                <span className="font-bold">Top News</span>

            </div>
            <h1 className="text-3xl font-bold sm:text-4xl">{headline}</h1>
            <p className="mt-4 text-gray-600">
                {children}
            </p>
            <ContinueReading href={href}/>
            <div className="absolute bottom-0 right-10 mr-4 mb-8">
                <Button
                     // Menggunakan handleSave yang dipass dari parent
                     id={id}
                     onClick={handleSave}
                     
                    className="bg-black text-white rounded-lg mr-4"
                >
                    <span>
                    <FontAwesomeIcon icon={isSaved ? solidBookmark : regularBookmark} />
                    </span>
                </Button>
            </div>
        </div>
    )
}

// Assign sub-components
TopNews.Image = Image
TopNews.Body = Body
