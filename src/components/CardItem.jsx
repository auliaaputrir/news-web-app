import ButtonSave from "./ButtonSave";

export default function CardItem({ news }) {
    return (
        <>
            <div className="container mx-auto max-w-72 ">

                <div className="flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white hover:shadow-xl">

                    {news.multimedia && news.multimedia.length > 0 && news.multimedia[0].url ? (
                        <img
                            alt={news.headline?.main || "News Image"}
                            src={`https://www.nytimes.com/${news.multimedia[0].url}`}
                            className="h-56 w-full object-cover"
                        />
                    ) : (
                        <div className="h-56 w-full bg-gray-200 flex items-center justify-center">
                            No Image Available
                        </div>
                    )}

                    <div className="p-4 sm:p-6">
                        <a href="#">
                            <h3 className="text-lg font-medium text-gray-900">
                                {news.headline.main}
                            </h3>
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            {news.abstract}
                        </p>

                        <a href={news.web_url} className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                            Find out more

                            <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 group-hover:text-xl rtl:rotate-180">
                                &rarr;
                            </span>
                        </a>
                    </div>
                    <div className="mt-0 mb-4 flex justify-end pr-4">
                        <ButtonSave />
                    </div>
                </div>
            </div>
        </>

    )
}