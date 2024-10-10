import React, { useEffect, useState } from "react";
import { fetchIndonesia } from "../services/api";

export default function useSaved(){
    // Load saved-news dari localStorage saat komponen pertama kali di-mount
    const [savedNews, setSavedNews] = useState(JSON.parse(localStorage.getItem('saved-news')) || [])
    const [isSaved, setIsSaved] = useState(false)
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
    const handleSave = (id) => {
        // Temukan item news yang id-nya sesuai dengan parameter id
        const data = news.find((item) => item._id === id);
    
        if (!data) {
          console.warn(`News dengan id ${id} tidak ditemukan.`);
          return;
        }
    
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
      };

    return  savedNews, isSaved, handleSave
}