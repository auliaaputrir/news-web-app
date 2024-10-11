import useSaved from "../hooks/useSaved"
import CardItem from '../components/NewsElements/CardItem'
import SectionTitle from "../components/NewsElements/SectionTitle";


export default function SavedNewsPage() {
    const { savedNews, isSaved, handleSave } = useSaved()

    return (
        <div className="mt-14 w-full">
            {savedNews.length === 0 ? (
                <div className="text-center font-bold text-slate-500 col-span-3">
                    No News Saved
                </div>
            ) : (
                <div>
                    <SectionTitle>SAVED</SectionTitle>

                    <div className="grid grid-cols-3 gap-2">
                        {savedNews.map((item) => (
                            <CardItem key={item._id}>
                                <CardItem.Image
                                    alt={`news-image-${item.headline?.main || 'default-headline'}`}
                                    src={
                                        item.multimedia && item.multimedia.length > 0 && item.multimedia[0].url
                                            ? `https://www.nytimes.com/${item.multimedia[0].url}`
                                            : null
                                    }
                                />
                                <CardItem.Body
                                    key={item._id}
                                    headline={item.headline?.main || 'No Title Available'}
                                    href={item.web_url}
                                    id={item._id}
                                    handleSave={() => handleSave(item)}
                                    isSaved={isSaved(item._id)}
                                >
                                    {item.abstract || 'No Description Available'}
                                </CardItem.Body>
                            </CardItem>
                        ))}
                    </div>
                </div>

            )}
        </div>
    )
}
