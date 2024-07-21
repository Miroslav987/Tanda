import "../../styles/SliderReviews.scss"
import Slider from "react-slick"
import { CardReview } from "./CardReview"
import { CommentsProps } from "../../App";

export const SliderReviews:React.FC<CommentsProps> =({comments})=> {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true, // показ стрелок навигации
        pauseOnHover: true,
        
        adaptiveHeight: true,
        nextArrow: <button className="slick-next"></button>,
        prevArrow: <button className="slick-prev"></button>,
        responsive: [
            {
              breakpoint: 1068,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 500,
              settings: {
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: false,
                verticalSwiping: false,
              },
            },
        ]
      };
    return (
        <>  
        <Slider className="slider_reviews" {...settings}>
          {comments? comments.map((comment:any)=>

          comment.description != null &&<CardReview comment={comment} />

            )  :null}
        </Slider>
        </>
    )
}