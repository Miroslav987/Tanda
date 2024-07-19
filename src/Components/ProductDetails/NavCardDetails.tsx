import "../../styles/NavCardDetails.scss"
import star from "../../icons/star(1).svg"
import { DetailProductProps } from "../../App"



export const NavCardDetails:React.FC<DetailProductProps> =({data})=> {

    
    return (
        <>
            <article className="nav_card_details">
                    <section className="nav_card_details_left_block" >
                        <div className="nav_card_details_img">
                            <img src="https://s3-alpha-sig.figma.com/img/5d7d/2e3a/79738e6db8a17046d025ffb2926b415b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZyiSmyref71xDrup0zU8JyCGG7N~39AqINNB~7qwNh1rOjSxcMFUrToQz2xJOfxzKtqkCwNxDM04NePOqUgm7qtXN8zy7j1UQ4aM0uymECT3BksHtPCYg-zSUCVEMWizqMLFMoo2TCgOTHMxElHPqnfunPn-8NmV1BOexdmQfQvu-xLsnkpYFxCLrLqP24~dEWJsUks6z-K3AqznBzjfICfpCb4vgI0IQ~4uBZSKzogZJCtC-Vhp6caD2ok5e1cmpyRoIpfdbuzhVsKsnjQd2jN0WonD1R5ybAQEFler4byiNUhpfB5Z3rL4Ni-MtkRBLe05FVciK-37P-rx9mUCQ__" alt="" />
                        </div>
                        <section>
                            <h4>{data.title}</h4>
                            <h5><img src={star} alt="" /> 4.9 <span> 60 отзывов</span></h5>
                        </section>
                    </section>
                    <section className="nav_card_details_right_block">
                        <div>
                            <h2>{data.sellingPrice} сом</h2>
                            <h3>{data.sellingPrice} сом</h3>
                        </div>
                        <button className="btn_buy">Купить сейчас</button>
                        <button className="btn_basket">В корзину</button>
                    </section>
            </article>
        </>
    )
}