import "../../styles/CardReview.scss"
import star from "../../icons/star.svg";
import star1 from "../../icons/star(1).svg";
import { Comments } from "../../App";

interface Comment {
    comment :Comments
}
export const CardReview:React.FC<Comment> =({comment})=> {
    return(
    <>
        <section className="card_review">

            <section className="review_user">
                <div className="ava_user"></div>
                <div className="info_user">
                    <h4>{comment.name}</h4>
                    <p>17 мая 2023, 20:46</p>
                </div>
                <div className="rating_user">
                    <img src={star1} alt="" />
                    <img src={star1} alt="" />
                    <img src={star1} alt="" />
                    <img src={star1} alt="" />
                    <img src={star} alt="" />
                </div>
            </section>

            <aside>
               {comment.description}
            </aside>
            
            <button>
                Пожаловаться на отзыв
            </button>
        </section>
    </>
    )
}