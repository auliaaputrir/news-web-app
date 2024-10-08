/* eslint-disable react/prop-types */
import ContinueReading from "./ContinueReadingLink"

export default function TopNews(props) {
    const { children } = props
    return (
        <div className="container mt-0 mx-auto">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    {children}
                </div>
            </div>
        </div>
    )
}

export function Image(props) {
    const { src, alt = 'news image' } = props
    return (
        <div className="h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
            <img
                alt={alt}
                src={src}
                className="inset-0 h-full w-full object-cover"
            />
        </div>
    )
}

export function Body(props) {
    const { headline, children } = props
    return (
        <div className="lg:py-24">
            <div className="w-24 h-10 pt-2 pl-3 bg-red-600 text-white ">
                <span className="font-bold">Top News</span>
                
            </div>
            <h1 className="text-3xl font-bold sm:text-4xl">{headline}</h1>
            <p className="mt-4 text-gray-600">
                {children}
            </p>
            <ContinueReading />
        </div>
    )
}

// Assign sub-components
TopNews.Image = Image
TopNews.Body = Body
