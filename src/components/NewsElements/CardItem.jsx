// CardItem.jsx
import React from 'react';
import Button from "../Elements/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';
import ContinueReading from "../Elements/Anchor/ContinueReading";

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
    const { headline, children, href, id, handleSave, isSaved } = props;
    return (
        <div className="p-4 sm:p-6 relative cursor-pointer">
            <a href={href} target="_blank" rel="noopener noreferrer">
                <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600">
                    {headline}
                </h3>
            </a>

            <p className="mt-2 text-sm text-gray-500 min-h-24 ">
                {children}
            </p>
            <div className="flex flex-row mb-3 ">
                <ContinueReading href={href} />
            </div>
            <div className="absolute bottom-0 right-0 mr-4 mb-8">
                <Button
                    id={id}
                    onClick={handleSave} // Menggunakan handleSave yang dipass dari parent
                    className="bg-black text-white rounded-lg mr-4"
                >
                    <span>
                        <FontAwesomeIcon icon={isSaved ? solidBookmark : regularBookmark} />
                    </span>
                </Button>
            </div>
        </div>
    );
}

Card.Image = Image;
Card.Body = Body;