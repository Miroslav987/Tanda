import "../styles/Navbar.scss"
import logo from "../icons/LOGO.svg" 
import auth from "../icons/auth.svg" 
import searchImg from "../icons/Search.svg"
import basket from "../icons/basket.svg" 
import burgerMenu from "../icons/burgerMenu.svg" 

interface SearchProps {
    setSearch: (value: number) => void;
    search:number
  }
  

export const Navbar: React.FC<SearchProps> =({setSearch ,search})=> {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value =event.target.value
        setSearch(Number(value));
      };
    return (
        <>
            <header>
                <nav className="nav_top">
                    <img src={logo} alt="" />

                    <input 
                        type="number"
                        className="inp_search"
                        placeholder="Искать на UNO"
                        value={search}
                        onChange={handleChange}
                    />
                    <div>
                    <img className="adaptive" src={searchImg} alt="" />
                    <img className="adaptive" src={burgerMenu} alt="" />
                        <a href="">
                            <img src={auth} alt="" />
                            <p>Войти</p>
                        </a>
                        <a href="">
                            <img src={basket} alt="" />
                            <p>Корзина</p>
                        </a>
                    </div>

                </nav>
                <nav className="nav_bottom">
                    
                    <a href=""> <img src={burgerMenu} alt="" />    Все категории</a>
                    <a href="">Стать продавцом</a>
                    <a href="">О нас</a>
                    <a href="">Курьерам</a>
                    <a href="">Контакты</a>
                    <a href="">Доставка</a>
                    <div className="flex"></div>
                </nav>
            </header>
        </>
    )
}