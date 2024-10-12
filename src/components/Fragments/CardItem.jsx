import React from 'react';
import Anchor from "../Elements/Anchor";
;

export default function Card(props) {
    const { children } = props;
    return (
            <div className="container mx-auto max-w-96 my-4 ">
                <div className="flex flex-col rounded-lg border-2 border-gray-200 bg-white h-full ">

                    {children}
                </div>
            </div>
    );
}

export function Image(props) {
    const { alt, src } = props;
    return (
        <>
            {src ? (
                <img
                    alt={alt}
                    src={src}
                    className="h-56 w-full object-cover"
                />
            ) : (
                <div className="h-56 w-full bg-gray-200 flex items-center justify-center">
                    No Image Available
                </div>
            )}
        </>
    );
}

export function Body(props) {
    const { headline, children, href } = props;



    return (
        <div className="p-4 sm:p-6 relative cursor-pointer">
            <a href={href} target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600">
                    {headline}
                </h3>
            </a>

            <div className="mt-2 text-sm text-gray-500 min-h-24 ">
                {children}
            </div>

            <div className="flex flex-row mb-3 ">
                <Anchor href={href}> Continue Reading </Anchor>
            </div>

        </div>

    );
}

Card.Image = Image;
Card.Body = Body;