import { fetchIndonesia } from "../api/api";
import CardItem from "../components/CardItem"
import { useState, useEffect } from "react";

export default function Indonesia() {
  const [indonesiaNews, setIndonesiaNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error

  useEffect(() => {
    const getIndonesiaNews = async () => {
      try {
        const newsArray = await fetchIndonesia();
        console.log("Fetched Indonesia News:", newsArray);
        setIndonesiaNews(newsArray);
      } catch (err) {
        console.error("Error fetching Indonesia news:", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getIndonesiaNews();
  }, []);

  return (
    <div className="container mx-auto lg:px-8 ">
      <h2 className="pt-8 mx-auto pb-4">Indonesia</h2>
      <div className="grid grid-cols-4 gap-4">
        {isLoading ? (
          <p className='text-2xl text-white'>Loading...</p>
        ) : error ? (
          <p className='text-2xl text-red-500'>Failed to load news.</p>
        ) : indonesiaNews.length > 0 ? (
          indonesiaNews.map((item) => (
            <CardItem key={item._id} news={item} />
          ))
        ) : (
          <p className='text-2xl text-white'>No news available.</p>
        )}
      </div>
    </div>
  );
}
