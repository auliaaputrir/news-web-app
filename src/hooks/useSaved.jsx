import { useEffect, useState } from "react";

export default function useSaved() {
    const [savedNews, setSavedNews] = useState(() => {
        // Mengambil data dari localStorage saat inisialisasi
        const saved = localStorage.getItem('saved-news');
        return saved ? JSON.parse(saved) : [];
    });

    // Menyimpan perubahan ke localStorage setiap kali `savedNews` berubah
    useEffect(() => {
        localStorage.setItem('saved-news', JSON.stringify(savedNews));
    }, [savedNews]);

    // Fungsi untuk memeriksa apakah berita dengan `id` tertentu sudah disimpan
    const isSaved = (id) => savedNews.some(item => item._id === id);

    // Fungsi untuk menyimpan atau menghapus berita
    const handleSave = (item) => {
        if (isSaved(item._id)) {
            // Jika sudah disimpan, hapus dari daftar
            setSavedNews(prevSavedNews => prevSavedNews.filter(newsItem => newsItem._id !== item._id));
        } else {
            // Jika belum disimpan, tambahkan ke daftar
            setSavedNews(prevSavedNews => [...prevSavedNews, item]);
        }
    };

    return { savedNews, isSaved, handleSave };
}
