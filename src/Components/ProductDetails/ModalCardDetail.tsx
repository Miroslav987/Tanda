import "../../styles/ModalCardDetail.scss"
import exit from "../../icons/exit.svg"
import { DetailProduct } from "../../App";

interface ModalProps {
        data:DetailProduct
        setModal:(value: [string,string]) => void;
        open:[string,string]
} 
export const ModalCardDetail:React.FC<ModalProps> =({data, setModal, open})=> {

        
    return(
        <>
        <article style={{left:open[0]}} className="modal_card_details">
            <section style={{width:open[1]}} className="modal_card_details_block">
                <section className="modal_card_details_nav">
                    <h3>Характеристики</h3>
                    <button onClick={()=>setModal(["100%","0"])}><img src={exit} alt="" /></button>
                </section>
                <section className="modal_card_details_info">
                        <tr>
                            <td>Название</td>
                            <td>Время добавления</td>
                            <td>Компания</td>
                            <td>Цвет</td>
                            <td>Способ установки</td>
                            <td>Материал</td>
                            <td>Управление</td>
                            <td>Способ установки</td>
                            <td>Материал</td>
                            <td>Управление</td>
                        </tr>
                        <tr>
                            <th>{data.title}</th>
                            <th>{data.createdAt}</th>
                            <th>{data.category.slug}</th>
                            <th>Цвет</th>
                            <th>Способ установки</th>
                            <th>Материал</th>
                            <th>Управление</th>
                            <th>Способ установки</th>
                            <th>Материал</th>
                            <th>Управление</th>

                        </tr>
                </section>
                <section className="modal_card_details_price">
                        <h3>32500 сом </h3> <button>В корзину</button>
                </section>
            </section>
        </article>
        </>
    )
}