import React, { useEffect, useState } from "react";
import CardItem from "../components/Fragments/CardItem";
import TopNews from "../components/Fragments/TopNews";
import { fetchProgramming } from "../services/api";
import SectionTitle from "../components/Fragments/SectionTitle";
import ButtonSave from "../components/Fragments/ButtonSave";

export default function Indonesia() {
    const [news, setNews] = useState([]);
    const [firstNews, setFirstNews] = useState(null); // State for the first news item
    const [error, setError] = useState(null); // Menambahkan state error
    const [isLoading, setIsLoading] = useState(true); // Menambahkan state isLoading

    // Load news dari API
    useEffect(() => {
        const getNewsList = async () => {
            try {
                const newsArray = await fetchProgramming();
                setNews(newsArray);
                if (newsArray.length > 0) {
                    setFirstNews(newsArray[0]);
                }
            } catch (err) {
                console.error("Error fetching news:", err);
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        getNewsList();
    }, []);



    // Render loading, error, atau konten
    if (isLoading) {
        return <div className="text-center mt-20">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-20 text-red-500">Error: {error.message}</div>;
    }

    return (
        <div>
            <SectionTitle>Programming</SectionTitle>
            <div className="container mt-10 pb-8 mx-auto">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
                    {firstNews && (
                        <TopNews>
                            <TopNews.Image
                                alt='news-image'
                                src={
                                    firstNews.multimedia && firstNews.multimedia.length > 0
                                        ? `https://www.nytimes.com/${firstNews.multimedia[0].url}`
                                        : null
                                }
                            />
                            <TopNews.Body
                                headline={firstNews.headline?.main || 'No Title Available'}
                                href={firstNews.web_url}
                            >
                                {firstNews.abstracts || 'No Description Available'}
                                <div className="absolute bottom-0 right-0 mr-10 mb-8">

                                    <ButtonSave news={firstNews} />
                                </div>
                            </TopNews.Body>
                        </TopNews>
                    )}
                </div>

                {/* CardItem Section */}
                <div className="mt-14 w-full grid grid-cols-3 gap-2">
                    {news.slice(1).map((item) => ( // Start mapping from index 1
                        <CardItem key={item._id}>
                            <CardItem.Image
                                alt={`news-image-${item.headline?.main || 'default-headline'}`}
                                src={
                                    item.multimedia && item.multimedia.length > 0 && item.multimedia[0].url
                                        ? `https://www.nytimes.com/${item.multimedia[0].url}`
                                        : null // Jika tidak ada URL, jangan tampilkan gambar
                                }
                            />
                            <CardItem.Body
                                headline={item.headline?.main || 'No Title Available'}
                                href={item.web_url}
                                item={item}
                            >
                                {item.abstract || 'No Description Available'}
                                <div className="absolute bottom-0 right-0 mr-4 mb-8">

                                    <ButtonSave news={item} />
                                </div>
                            </CardItem.Body>

                        </CardItem>
                    ))}
                </div>
            </div>
        </div>

    );
}