import CardItem from '../components/Fragments/CardItem'
import SectionTitle from "../components/Fragments/SectionTitle";
import { useSelector } from "react-redux";
import ButtonSave from "../components/Fragments/ButtonSave";


export default function SavedNewsPage() {
    const savedNews = useSelector((state) => state.save.data)

    return (
        <div className="mt-14 w-full">
            {savedNews.length === 0 ? (
                <div className="text-center font-bold text-slate-500 col-span-3">
                    No News Saved
                </div>
            ) : (
                <div>
                    <SectionTitle>SAVED</SectionTitle>

                    <div className="mt-14 w-full grid gap-2 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 md:gap-6">
                        {savedNews.map((item, index) => (
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
                                    headline={item.headline?.main || 'No Title Available'}
                                    href={item.web_url}
                                    item={item}
                                >
                                    {item.abstract || 'No Description Available'}
                                    <div className="absolute bottom-0 right-0 mr-4 mb-8">

                                        <ButtonSave news={item} />
                                    </div>
                                </CardItem.Body>
                            </CardItem>
                        ))}
                    </div>
                </div>

            )}
        </div>
    )
}
