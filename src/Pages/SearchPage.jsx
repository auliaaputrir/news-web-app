// src/components/LatestNews.jsx
// import { searchNews } from "../api/api";
import CardItem from "../components/CardItem";
import { useState, useEffect } from "react";

export default function SearchNews() {
  const [searchNews, setSearchNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error

  
  useEffect(() => {
    const getSearchNews = async () => {
      try {
        const newsArray = await searchNews();
        console.log("Search News:", newsArray);
        setSearchNews(newsArray);
      } catch (err) {
        console.error("Error fetching Indonesia news:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getSearchNews();
  }, []);

  return (
    <div className="container mx-auto lg:px-8 ">
      <h2 className="pt-8 mx-auto pb-4">Search:</h2>
      <div className="grid grid-cols-4 gap-4">
        {isLoading ? (
          <p className='text-2xl text-white'>Loading...</p>
        ) : error ? (
          <p className='text-2xl text-red-500'>Failed to load news.</p>
        ) : searchNews.length > 0 ? (
          searchNews.map((item) => (
            <CardItem key={item._id} news={item} />
          ))
        ) : (
          <p className='text-2xl text-white'>No news available.</p>
        )}
      </div>
    </div>
  );
}
