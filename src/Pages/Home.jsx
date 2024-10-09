// src/pages/Indonesia.jsx
import CardItem from "../components/NewsElements/CardItem";
import TopNews from "../components/NewsElements/TopNews";

const news = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    headline: 'Grow your audience',
    abstract: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ea delectus alias molestiae quas voluptatem reiciendis est laboriosam quisquam. Vitae consequatur omnis amet laborum unde dolorum libero error nemo id!',
    url: 'url.com'
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    headline: 'Grow your audience',
    abstract: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ea delectus alias molestiae quas voluptatem reiciendis est laboriosam quisquam. Vitae consequatur omnis amet laborum unde dolorum libero error nemo id!',
    url: 'url.com'
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    headline: 'Grow your audience',
    abstract: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ea delectus alias molestiae quas voluptatem reiciendis est laboriosam quisquam. Vitae consequatur omnis amet laborum unde dolorum libero error nemo id!',
    url: 'url.com'
  },
]
export default function Indonesia() {
  return (
    <>
      {/* TopNews Section */}
      <div className="container mt-0 pb-8 mx-auto">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <TopNews>
            <TopNews.Image
              alt='news-image'
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            />
            <TopNews.Body
              headline='Grow your audience'
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ea delectus alias molestiae quas voluptatem reiciendis est laboriosam quisquam. Vitae consequatur omnis amet laborum unde dolorum libero error nemo id!
            </TopNews.Body>
          </TopNews>
        </div>
        {/* CardItem Section */}

        <div className="mt-14 w-full grid grid-cols-3 gap-2">

          {news.map((item) => (
            <CardItem key={item.id}>
              <CardItem.Image
                alt={`news-image$-${item.headline}`}
                src={item.img}
              />
              <CardItem.Body
                headline={item.headline}
                href={item.url}
                news={item}
              >
                {item.abstract}

              </CardItem.Body>
            </CardItem>
            
          ))}
        </div>

      </div>





    </>
  );
}
