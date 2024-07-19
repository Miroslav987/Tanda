import "../../styles/Card.scss"
import star from "../../icons/star.svg"
export const Card =()=> {
    return (
        <>
        <section className="card">
            <div className="img_fon">
                <img src="https://s3-alpha-sig.figma.com/img/5d7d/2e3a/79738e6db8a17046d025ffb2926b415b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZyiSmyref71xDrup0zU8JyCGG7N~39AqINNB~7qwNh1rOjSxcMFUrToQz2xJOfxzKtqkCwNxDM04NePOqUgm7qtXN8zy7j1UQ4aM0uymECT3BksHtPCYg-zSUCVEMWizqMLFMoo2TCgOTHMxElHPqnfunPn-8NmV1BOexdmQfQvu-xLsnkpYFxCLrLqP24~dEWJsUks6z-K3AqznBzjfICfpCb4vgI0IQ~4uBZSKzogZJCtC-Vhp6caD2ok5e1cmpyRoIpfdbuzhVsKsnjQd2jN0WonD1R5ybAQEFler4byiNUhpfB5Z3rL4Ni-MtkRBLe05FVciK-37P-rx9mUCQ__" alt="" />
            </div>
            <div className="card_info">
                <h4>Jack JK - F4</h4>
                <h5>Швейная машина</h5>
                <div className="rating_reviews">
                    <div className="rating">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
                    <p>0 отзывов</p>
                </div>
                <h4>50 900 сом</h4>
            </div>
            <button>Купить сейчас</button>
        </section>
        </>
    )
}