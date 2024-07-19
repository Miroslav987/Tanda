import Slider from "react-slick"
import "../../styles/SliderImgdetails.scss"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export const SliderImgdetails =()=> {
    const settings = {
        infinite: false,
        vertical: true, // Устанавливаем вертикальную ориентацию
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true, // показ стрелок навигации
        pauseOnHover: true,
        adaptiveHeight: false,
        nextArrow: <button className="slick-next"></button>,
        prevArrow: <button className="slick-prev"></button>,
        responsive: [
            {
              breakpoint: 650,
              settings: {
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                horizontal: true,
                horizontalSwiping: true,
                arrows: false, // показ стрелок навигации
                pauseOnHover: true
              },
            },
        ]
      };
    const settingsAdaptive = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        horizontal: true,
        horizontalSwiping: true,
        arrows: false, // показ стрелок навигации
        pauseOnHover: true,};
    return (
        <>
        <Slider {...settings} className="slider_img" >
                    <div className="block_img">
                        <img src="https://s3-alpha-sig.figma.com/img/5d7d/2e3a/79738e6db8a17046d025ffb2926b415b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZyiSmyref71xDrup0zU8JyCGG7N~39AqINNB~7qwNh1rOjSxcMFUrToQz2xJOfxzKtqkCwNxDM04NePOqUgm7qtXN8zy7j1UQ4aM0uymECT3BksHtPCYg-zSUCVEMWizqMLFMoo2TCgOTHMxElHPqnfunPn-8NmV1BOexdmQfQvu-xLsnkpYFxCLrLqP24~dEWJsUks6z-K3AqznBzjfICfpCb4vgI0IQ~4uBZSKzogZJCtC-Vhp6caD2ok5e1cmpyRoIpfdbuzhVsKsnjQd2jN0WonD1R5ybAQEFler4byiNUhpfB5Z3rL4Ni-MtkRBLe05FVciK-37P-rx9mUCQ__" alt="" />
                    </div>
                    <div className="block_img">
                        <img src="https://s3-alpha-sig.figma.com/img/5d7d/2e3a/79738e6db8a17046d025ffb2926b415b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZyiSmyref71xDrup0zU8JyCGG7N~39AqINNB~7qwNh1rOjSxcMFUrToQz2xJOfxzKtqkCwNxDM04NePOqUgm7qtXN8zy7j1UQ4aM0uymECT3BksHtPCYg-zSUCVEMWizqMLFMoo2TCgOTHMxElHPqnfunPn-8NmV1BOexdmQfQvu-xLsnkpYFxCLrLqP24~dEWJsUks6z-K3AqznBzjfICfpCb4vgI0IQ~4uBZSKzogZJCtC-Vhp6caD2ok5e1cmpyRoIpfdbuzhVsKsnjQd2jN0WonD1R5ybAQEFler4byiNUhpfB5Z3rL4Ni-MtkRBLe05FVciK-37P-rx9mUCQ__" alt="" />
                    </div>
                    <div className="block_img">
                        <img src="https://s3-alpha-sig.figma.com/img/5d7d/2e3a/79738e6db8a17046d025ffb2926b415b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZyiSmyref71xDrup0zU8JyCGG7N~39AqINNB~7qwNh1rOjSxcMFUrToQz2xJOfxzKtqkCwNxDM04NePOqUgm7qtXN8zy7j1UQ4aM0uymECT3BksHtPCYg-zSUCVEMWizqMLFMoo2TCgOTHMxElHPqnfunPn-8NmV1BOexdmQfQvu-xLsnkpYFxCLrLqP24~dEWJsUks6z-K3AqznBzjfICfpCb4vgI0IQ~4uBZSKzogZJCtC-Vhp6caD2ok5e1cmpyRoIpfdbuzhVsKsnjQd2jN0WonD1R5ybAQEFler4byiNUhpfB5Z3rL4Ni-MtkRBLe05FVciK-37P-rx9mUCQ__" alt="" />
                    </div>
                    <div className="block_img">
                        <img src="https://s3-alpha-sig.figma.com/img/5d7d/2e3a/79738e6db8a17046d025ffb2926b415b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZyiSmyref71xDrup0zU8JyCGG7N~39AqINNB~7qwNh1rOjSxcMFUrToQz2xJOfxzKtqkCwNxDM04NePOqUgm7qtXN8zy7j1UQ4aM0uymECT3BksHtPCYg-zSUCVEMWizqMLFMoo2TCgOTHMxElHPqnfunPn-8NmV1BOexdmQfQvu-xLsnkpYFxCLrLqP24~dEWJsUks6z-K3AqznBzjfICfpCb4vgI0IQ~4uBZSKzogZJCtC-Vhp6caD2ok5e1cmpyRoIpfdbuzhVsKsnjQd2jN0WonD1R5ybAQEFler4byiNUhpfB5Z3rL4Ni-MtkRBLe05FVciK-37P-rx9mUCQ__" alt="" />
                    </div>
                    <div className="block_img">
                        <img src="https://s3-alpha-sig.figma.com/img/5d7d/2e3a/79738e6db8a17046d025ffb2926b415b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZyiSmyref71xDrup0zU8JyCGG7N~39AqINNB~7qwNh1rOjSxcMFUrToQz2xJOfxzKtqkCwNxDM04NePOqUgm7qtXN8zy7j1UQ4aM0uymECT3BksHtPCYg-zSUCVEMWizqMLFMoo2TCgOTHMxElHPqnfunPn-8NmV1BOexdmQfQvu-xLsnkpYFxCLrLqP24~dEWJsUks6z-K3AqznBzjfICfpCb4vgI0IQ~4uBZSKzogZJCtC-Vhp6caD2ok5e1cmpyRoIpfdbuzhVsKsnjQd2jN0WonD1R5ybAQEFler4byiNUhpfB5Z3rL4Ni-MtkRBLe05FVciK-37P-rx9mUCQ__" alt="" />
                    </div>
        </Slider>
        <Slider {...settingsAdaptive} className="slider_img_adaptive" >
                    <div className="block_img">
                        <img src="https://s3-alpha-sig.figma.com/img/5d7d/2e3a/79738e6db8a17046d025ffb2926b415b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZyiSmyref71xDrup0zU8JyCGG7N~39AqINNB~7qwNh1rOjSxcMFUrToQz2xJOfxzKtqkCwNxDM04NePOqUgm7qtXN8zy7j1UQ4aM0uymECT3BksHtPCYg-zSUCVEMWizqMLFMoo2TCgOTHMxElHPqnfunPn-8NmV1BOexdmQfQvu-xLsnkpYFxCLrLqP24~dEWJsUks6z-K3AqznBzjfICfpCb4vgI0IQ~4uBZSKzogZJCtC-Vhp6caD2ok5e1cmpyRoIpfdbuzhVsKsnjQd2jN0WonD1R5ybAQEFler4byiNUhpfB5Z3rL4Ni-MtkRBLe05FVciK-37P-rx9mUCQ__" alt="" />
                    </div>
                    <div className="block_img">
                        <img src="https://s3-alpha-sig.figma.com/img/5d7d/2e3a/79738e6db8a17046d025ffb2926b415b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZyiSmyref71xDrup0zU8JyCGG7N~39AqINNB~7qwNh1rOjSxcMFUrToQz2xJOfxzKtqkCwNxDM04NePOqUgm7qtXN8zy7j1UQ4aM0uymECT3BksHtPCYg-zSUCVEMWizqMLFMoo2TCgOTHMxElHPqnfunPn-8NmV1BOexdmQfQvu-xLsnkpYFxCLrLqP24~dEWJsUks6z-K3AqznBzjfICfpCb4vgI0IQ~4uBZSKzogZJCtC-Vhp6caD2ok5e1cmpyRoIpfdbuzhVsKsnjQd2jN0WonD1R5ybAQEFler4byiNUhpfB5Z3rL4Ni-MtkRBLe05FVciK-37P-rx9mUCQ__" alt="" />
                    </div>
                    <div className="block_img">
                        <img src="https://s3-alpha-sig.figma.com/img/5d7d/2e3a/79738e6db8a17046d025ffb2926b415b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZyiSmyref71xDrup0zU8JyCGG7N~39AqINNB~7qwNh1rOjSxcMFUrToQz2xJOfxzKtqkCwNxDM04NePOqUgm7qtXN8zy7j1UQ4aM0uymECT3BksHtPCYg-zSUCVEMWizqMLFMoo2TCgOTHMxElHPqnfunPn-8NmV1BOexdmQfQvu-xLsnkpYFxCLrLqP24~dEWJsUks6z-K3AqznBzjfICfpCb4vgI0IQ~4uBZSKzogZJCtC-Vhp6caD2ok5e1cmpyRoIpfdbuzhVsKsnjQd2jN0WonD1R5ybAQEFler4byiNUhpfB5Z3rL4Ni-MtkRBLe05FVciK-37P-rx9mUCQ__" alt="" />
                    </div>
                    <div className="block_img">
                        <img src="https://s3-alpha-sig.figma.com/img/5d7d/2e3a/79738e6db8a17046d025ffb2926b415b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZyiSmyref71xDrup0zU8JyCGG7N~39AqINNB~7qwNh1rOjSxcMFUrToQz2xJOfxzKtqkCwNxDM04NePOqUgm7qtXN8zy7j1UQ4aM0uymECT3BksHtPCYg-zSUCVEMWizqMLFMoo2TCgOTHMxElHPqnfunPn-8NmV1BOexdmQfQvu-xLsnkpYFxCLrLqP24~dEWJsUks6z-K3AqznBzjfICfpCb4vgI0IQ~4uBZSKzogZJCtC-Vhp6caD2ok5e1cmpyRoIpfdbuzhVsKsnjQd2jN0WonD1R5ybAQEFler4byiNUhpfB5Z3rL4Ni-MtkRBLe05FVciK-37P-rx9mUCQ__" alt="" />
                    </div>
                    <div className="block_img">
                        <img src="https://s3-alpha-sig.figma.com/img/5d7d/2e3a/79738e6db8a17046d025ffb2926b415b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gZyiSmyref71xDrup0zU8JyCGG7N~39AqINNB~7qwNh1rOjSxcMFUrToQz2xJOfxzKtqkCwNxDM04NePOqUgm7qtXN8zy7j1UQ4aM0uymECT3BksHtPCYg-zSUCVEMWizqMLFMoo2TCgOTHMxElHPqnfunPn-8NmV1BOexdmQfQvu-xLsnkpYFxCLrLqP24~dEWJsUks6z-K3AqznBzjfICfpCb4vgI0IQ~4uBZSKzogZJCtC-Vhp6caD2ok5e1cmpyRoIpfdbuzhVsKsnjQd2jN0WonD1R5ybAQEFler4byiNUhpfB5Z3rL4Ni-MtkRBLe05FVciK-37P-rx9mUCQ__" alt="" />
                    </div>
        </Slider>
        </>
    )
}