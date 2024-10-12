import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import { fetchNews } from '../services/api';
import CardItem from "../components/NewsElements/CardItem"; 
import TopNews from "../components/NewsElements/TopNews";
import useSaved from '../hooks/useSaved';
import SectionTitle from '../components/NewsElements/SectionTitle'

export default function SearchNews() {
  const location = useLocation();
  const navigate = useNavigate(); // Inisialisasi useNavigate
  const query = new URLSearchParams(location.search).get('query'); // Mengambil query dari URL
  const [news, setNews] = useState([]); // State untuk menyimpan berita
  const [loading, setLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk menyimpan error
  const { savedNews, isSaved, handleSave } = useSaved()

  useEffect(() => {
    // Jika tidak ada query
    if (!query) {
      navigate('/error'); 
      return; // Keluar dari useEffect
    }

    const fetchData = async () => {
      try {
        const result = await fetchNews(query); // Mengambil berita berdasarkan query
        setNews(result); // Mengupdate state dengan berita yang didapat
      } catch (err) {
        setError(err); // Menyimpan error jika terjadi
      } finally {
        setLoading(false); // Mengubah loading menjadi false setelah proses selesai
      }
    };

    fetchData();
  }, [query, navigate]); // Menggunakan query dan navigate sebagai dependency

  if (loading) return <p className='text-center'>Loading...</p>; // Menampilkan loading
  if (error) return <p className='text-center'>Error: {error.message}</p>; // Menampilkan pesan error

  return (
    <div>
      <SectionTitle>Search: {query}</SectionTitle>
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
  );
}
