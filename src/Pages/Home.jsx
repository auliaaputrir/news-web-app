import React, { useEffect, useState } from "react";
import CardItem from "../components/NewsElements/CardItem"; 
import TopNews from "../components/NewsElements/TopNews";
import { fetchIndonesia } from "../services/api";
import useSaved from '../hooks/useSaved'
import SectionTitle from "../components/NewsElements/SectionTitle";
export default function Indonesia() {
    const [news, setNews] = useState([]);
    const [firstNews, setFirstNews] = useState(null); // State for the first news item
    const { isSaved, handleSave } = useSaved()
    const [error, setError] = useState(null); // Menambahkan state error
    const [isLoading, setIsLoading] = useState(true); // Menambahkan state isLoading

    // Load news dari API
    useEffect(() => {
        const getNewsList = async () => {
            try {
                const newsArray = await fetchIndonesia();
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
            <SectionTitle>Indonesia</SectionTitle>
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
                            {firstNews.abstract || 'No Description Available'}
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
                            key={item._id}
                            headline={item.headline?.main || 'No Title Available'}
                            href={item.web_url}
                            id={item._id}
                            handleSave={() => handleSave(item)} // Mengirimkan seluruh objek `item`
                            isSaved={isSaved(item._id)} // Mengirimkan status boolean
                        >
                            {item.abstract || 'No Description Available'}
                        </CardItem.Body>
                    </CardItem>
                ))}
            </div>
        </div>
        </div>
       
    );
}