// src/components/LatestNews.jsx
import { fetchNews } from "../api/api";
import CardItem from "../components/CardItem"
import { useState, useEffect } from "react";
import Loading from "../components/LoadMessage/Loading";
import Error from "../components/LoadMessage/Error";
import NoNews from "../components/LoadMessage/NoNews";
import SectionTitle from "../components/SectionTitle";

export default function NewsList(props) {
    const {query} = props
    
    
    
    const [newsList, setNewsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // State untuk loading
    const [error, setError] = useState(null); // State untuk error


    useEffect(() => {
        const getNewsList = async () => {
            try {
                const newsArray = await fetchNews(query);
                console.log("Fetched News:", newsArray);
                setNewsList(newsArray);
                console.log(query);
            } catch (err) {
                console.error("Error fetching news:", err);
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        getNewsList(query);
    }, []);

    return (
        <>
            <SectionTitle>{query}</SectionTitle>
            <div className="grid grid-cols-4 gap-4">
                {isLoading ? (
                    <Loading />
                ) : error ? (
                    <Error />
                ) : newsList.length > 0 ? (
                    newsList.map((item) => (
                        <CardItem key={item._id} news={item} />
                    ))
                ) : (
                    <NoNews />
                )}
            </div>

        </>

    );
}
