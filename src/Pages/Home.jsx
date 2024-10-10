// Indonesia.jsx
import React, { useEffect, useState } from "react";
import CardItem from "../components/NewsElements/CardItem"; // Pastikan path sesuai
import TopNews from "../components/NewsElements/TopNews";
import { fetchIndonesia } from "../services/api";

export default function Indonesia() {
    const [news, setNews] = useState([]);
    const [savedNews, setSavedNews] = useState([]);
    const [isSaved, setIsSaved] = useState({});
    const [error, setError] = useState(null); // Menambahkan state error
    const [isLoading, setIsLoading] = useState(true); // Menambahkan state isLoading

    // Load news dari API
    useEffect(() => {
        const getNewsList = async () => {
            try {
                const newsArray = await fetchIndonesia();
                console.log("News Array:", newsArray); // Memeriksa struktur data
                setNews(newsArray);
            } catch (err) {
                console.error("Error fetching news:", err);
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        getNewsList();
    }, []);

    // Load saved-news dari localStorage saat komponen pertama kali di-mount
    useEffect(() => {
        const storedSavedNews = JSON.parse(localStorage.getItem('saved-news')) || [];
        setSavedNews(storedSavedNews);

        // Set isSaved berdasarkan apa yang ada di localStorage
        const initialSavedState = {};
        storedSavedNews.forEach(item => {
            initialSavedState[item._id] = true; // Asumsi bahwa item memiliki _id
        });
        setIsSaved(initialSavedState);
    }, []);

    // Simpan `savedNews` ke localStorage setiap kali `savedNews` berubah
    useEffect(() => {
        localStorage.setItem('saved-news', JSON.stringify(savedNews));
    }, [savedNews]);

    // Fungsi handleSave
    function handleSave(id) {
        // Temukan item news yang id-nya sesuai dengan parameter id
        const data = news.find((item) => item._id === id);

        // Jika item sudah ada di savedNews, hapus
        if (savedNews.find(item => item._id === id)) {
            const updatedSavedNews = savedNews.filter((item) => item._id !== id);
            setSavedNews(updatedSavedNews);

            setIsSaved(prevState => ({
                ...prevState,
                [id]: false // Set jadi tidak tersimpan (unsaved) untuk id yang spesifik
            }));
        } else {
            // Jika belum ada, tambahkan item ke savedNews
            setSavedNews([...savedNews, data]);

            setIsSaved(prevState => ({
                ...prevState,
                [id]: true // Set jadi tersimpan (saved) untuk id yang spesifik
            }));
        }
    }

    // Render loading, error, atau konten
    if (isLoading) {
        return <div className="text-center mt-20">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-20 text-red-500">Error: {error.message}</div>;
    }

    return (
        <div className="container mt-0 pb-8 mx-auto">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
                <TopNews>
                    <TopNews.Image
                        alt='news-image'
                        src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    />
                    <TopNews.Body
                        headline='Grow your audience'
                        href="#" // Tambahkan href yang sesuai jika perlu
                    >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ea delectus alias molestiae quas voluptatem reiciendis est laboriosam quisquam. Vitae consequatur omnis amet laborum unde dolorum libero error nemo id!
                    </TopNews.Body>
                </TopNews>
            </div>

            {/* CardItem Section */}
            <div className="mt-14 w-full grid grid-cols-3 gap-2">
                {news.map((item) => (
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
                            headline={item.headline?.main || 'No Title Available'} // Mengirimkan string, bukan objek
                            href={item.web_url}
                            id={item._id}
                            handleSave={handleSave}
                            isSaved={isSaved}
                        >
                            {item.abstract || 'No Description Available'}
                        </CardItem.Body>
                    </CardItem>
                ))}
            </div>
        </div>
    );
}
