/* eslint-disable react/prop-types */
import Anchor from "../Elements/Anchor"

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
    const { headline, children,href} = props
    return (
        <div className="lg:py-10">
            <div className="w-24 h-10 pt-2 pl-3  mb-5 bg-red-600 text-white ">
                <span className="font-bold">Top News</span>

            </div>
            <h1 className="text-3xl font-bold sm:text-4xl">{headline}</h1>
            <div className="mt-4 text-gray-600">
                {children}
            </div>
            <Anchor href={href}>Continue Reading</Anchor>

        </div>
    )
}

// Assign sub-components
TopNews.Image = Image
TopNews.Body = Body
