import "../styles/CardDetails.scss"
import { SliderImgdetails } from "../Components/ProductDetails/SliderImgdetails";
import user from "../icons/user.svg"
import star from "../icons/star(1).svg"
import { ModalCardDetail } from "../Components/ProductDetails/ModalCardDetail";
import React, { useEffect, useState } from "react";
import { NavCardDetails } from "../Components/ProductDetails/NavCardDetails";
import { DetailProduct, DetailProductProps } from "../App";



export const CardDetails:React.FC<DetailProductProps> =({data})=> {

    
    const [open, setModal]=useState<[string,string]>(["100%","0"])
    const [showBlock, setShowBlock] = useState(false);

    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      if (scrollHeight > 670) {
        setShowBlock(true);
      } else {
        setShowBlock(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    return (
        <>
    {data?
        <>
       {showBlock && <NavCardDetails data={data}/>}
        <p className="card_details_router">Главная / Бытовая техника / <span>Стиральные машины</span></p>
        <article className="card_details">
             <section className="adaptive_main"> 
                <SliderImgdetails/>
                <section className="main_img">
                    <img src="https://s3-alpha-sig.figma.com/img/5d7d/2e3a/79738e6db8a17046d025ffb2926b415b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZyiSmyref71xDrup0zU8JyCGG7N~39AqINNB~7qwNh1rOjSxcMFUrToQz2xJOfxzKtqkCwNxDM04NePOqUgm7qtXN8zy7j1UQ4aM0uymECT3BksHtPCYg-zSUCVEMWizqMLFMoo2TCgOTHMxElHPqnfunPn-8NmV1BOexdmQfQvu-xLsnkpYFxCLrLqP24~dEWJsUks6z-K3AqznBzjfICfpCb4vgI0IQ~4uBZSKzogZJCtC-Vhp6caD2ok5e1cmpyRoIpfdbuzhVsKsnjQd2jN0WonD1R5ybAQEFler4byiNUhpfB5Z3rL4Ni-MtkRBLe05FVciK-37P-rx9mUCQ__" alt="" />
                </section>
            </section>  
                <section className="details_info">
                    
                    {data.category?
                    <div>
                        
                        <h2>
                        {data.title}
                        {/* Стиральная машина Atlant на 7 кг */}
                        </h2>
                        <h4><img src={user} alt="" />Магазин {data.category.slug} </h4>
                        <h5>
                            {/* Бренд */}
                            {data.category.slug}
                        </h5>
                        <br />  
                        <h4><img src={star} alt="" /> 4.9 <span> 60 отзывов</span></h4>
                    </div>
                    :null} 
                    <div>
                    <h4>Описание</h4>
                    <p>
                       {data.description}
                       Промышленная швейная машина «Jack JK-H2» выполнена с увеличенным челноком и двойным транспортом ткани. Ось челнока расположена горизонтально. Двойной механизм подачи ткани позволяет предотвратить посадку материала. 
Модель явлется усовершенствованным вариантом машины Jack JK6380BCQ но имеет ряд доработок: Латунные втулки на механизме продвижения.
                    </p>
                    </div>
                    <span onClick={()=>setModal(["0","400px"])}>Смотреть характеристики</span>
                </section>
                <section className="price_block">
                    <section className="adaptive_price_block">
                        <div>
                            <h2>
                               {data.sellingPrice}
                                 сом</h2>
                            <h3 className="price_sale">
                            {data.sellingPrice}
                                сом
                                </h3>
                        </div>
                            <button className="btn_buy">Купить сейчас</button>
                            <button className="btn_credit">Оформить кредит</button>
                    </section>
                </section>
                    <button className="btn_credit_adaptive">Оформить кредит</button>
            </article>

            <ModalCardDetail data={data} setModal={setModal} open={open} />
        </>
        :null} 
        </>
       
    )
}