import React from 'react';
import Slider from "react-slick"
import { Container } from 'reactstrap';
import { PARTNER_IMG } from '../../../constant/global';
import Images from '../../../constant/images';
import "./Partner.scss"

function Partner(props) {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 400,
        pauseOnHover: true
    }
    return (
        <div >
            <Slider {...settings}>
                <div>
                    <img src={Images.LOGO_YEAH1} />
                </div>
                <div>
                    <img src={Images.LOGO_VIEON} />
                </div>
                <div>
                    <img src={Images.LOGO_DQ} />
                </div>
                <div>
                    <img src={Images.LOGO_KIOT} />
                </div>
                <div>
                    <img src={Images.LOGO_DONGA} />
                </div>

            </Slider>
        </div>
    );
}

export default Partner;