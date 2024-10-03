// src/components/LatestNews.jsx
import { fetchProgramming } from "../api/programmingApi";
import IndonesiaItem from "./CardItem";
import { useState, useEffect } from "react";

export default function LatestNews() {
  const [programmingNews, setProgrammingNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error

  useEffect(() => {
    const getProgrammingNews = async () => {
      try {
        const newsArray = await fetchProgramming();
        console.log("Fetched Programing News:", newsArray);
        setProgrammingNews(newsArray);
      } catch (err) {
        console.error("Error fetching Indonesia news:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getProgrammingNews();
  }, []);

  return (
    <div className="container mx-auto lg:px-8 ">
      <h2 className="pt-8 mx-auto pb-4">Programming</h2>
      <div className="grid grid-cols-4 gap-4">
        {isLoading ? (
          <p className='text-2xl text-white'>Loading...</p>
        ) : error ? (
          <p className='text-2xl text-red-500'>Failed to load news.</p>
        ) : programmingNews.length > 0 ? (
          programmingNews.map((item) => (
            <IndonesiaItem key={item._id} news={item} />
          ))
        ) : (
          <p className='text-2xl text-white'>No news available.</p>
        )}
      </div>
    </div>
  );
}
