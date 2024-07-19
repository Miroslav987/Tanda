import "../../styles/ListReviews.scss"
import star1 from "../../icons/star(1).svg"
import { SliderReviews } from "./SliderReviews"
import { CommentsProps } from "../../App"



export const ListReviews:React.FC<CommentsProps> =({comments})=> {


    return(
    <>
        <article className="list_reviews">
            <h3>Отзывы</h3>
            <div className="card_rating">
                <div>
                    <p>4.9</p>
                    <img src={star1} alt="" />
                    <img src={star1} alt="" />
                    <img src={star1} alt="" />
                    <img src={star1} alt="" />
                    <img src={star1} alt="" />
                    <span>60 отзывов</span>
                </div>
                <button></button>
            </div>
            <section>
                <SliderReviews comments={comments}/>
            </section>
            <button className="btn_all_reviews">Смотреть все отзывы</button>
        </article>
    </>
    )
}