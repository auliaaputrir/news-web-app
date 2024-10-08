// src/pages/Indonesia.jsx
import CardItem from "../components/NewsElements/CardItem";
import TopNews from "../components/NewsElements/TopNews";

export default function Indonesia() {
  return (
    <>
      {/* TopNews Section */}
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

      {/* CardItem Section */}
      <div className="grid grid-cols-4 gap-4">
        <CardItem>
          <CardItem.Image 
            alt='news-image' 
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
          />
          <CardItem.Body 
            headline='The Netherlands Returns Hundreds of Cultural Artifacts to Indonesia'
          >
            The repatriation, the second of its kind by the Dutch, shows a working model for returning looted treasures from Europe to former colonies around the world.
          </CardItem.Body>
        </CardItem>
        <CardItem>
          <CardItem.Image 
            alt='news-image' 
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
          />
          <CardItem.Body 
            headline='The Netherlands Returns Hundreds of Cultural Artifacts to Indonesia'
          >
            Officials have accused Alice Guo of helping criminal syndicates involved in online scams and human trafficking, and have questioned her about whether she was born in China.
          </CardItem.Body>
        </CardItem>
      </div>
      
    </>
  );
}
