import "../styles/Footer.scss"
import logo from "../icons/LOGO.svg"
import instagram from "../icons/instagram.svg"
import whatsapp from "../icons/whatsapp.svg"
export const Footer =()=>{
    return (
        <>
        <footer>
            <nav>
                <section>
                    <img src={logo} alt="" />
                    <br />
                    <div>
                        <img src={instagram} alt="" />
                        <img src={whatsapp} alt="" />
                    </div>
                </section>
                <section>
                    <h3>Компания</h3>
                    <ul>
                        <li>О нас</li>
                        <li>Способы оплаты</li>
                        <li>Доставка</li>
                        <li>Политика конфиденциальности</li>
                        <li>Персональные данные</li>
                    </ul>
                </section>
                <section>
                <h3>Партнерам</h3>
                    <ul>
                        <li>Продавайте на UNO</li>
                        <li>Курьерам</li>
                        <li>Доставка</li>
                    </ul>
                </section>
                <section>
                <h3>Контакты</h3>
                    <ul>
                        <li>unokg@gmail.com</li>
                        <li>+996 700 000 000</li>
                        <li>+996 500 000 000</li>
                    </ul>
                </section>
            </nav>
        </footer>
        </>
    )
}