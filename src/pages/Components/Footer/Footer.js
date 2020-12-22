import React from 'react';
import { FOOTER_MAIN } from '../../../constant/global';
import Images from "../../../constant/images"
import "./Footer.scss"

const FooterItem = ({ title, content, content2, content1 }) => {
    return (
        <div className="footer-main__item">
            <h3>{title}</h3>
            <ul className="footer-main__list">
                <li>{content}</li>
                <li>{content1}</li>
                <li>{content2}</li>
            </ul>
        </div>
    )
}
function Footer(props) {
    return (
        <footer className="footer" >
            <div className="footer-main">
                {FOOTER_MAIN.map((item, idx) => (
                    <FooterItem title={item.title} content={item.content} content1={item.content1} content2={item.content2} />
                ))}
                <div className="footer-main__item" >
                    <h3>Liên hệ</h3>
                    <ul className="footer-main__list">
                        <li><img src={Images.ADDRESS} /><span>61/3 Bình Giã, Tân Bình, HCM</span></li>
                        <li><img src={Images.PHONE} />0971-05-4444 ext: 2</li>
                        <li><img src={Images.EMAIL} />support@vndata.vn</li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="footer-copyright__content">
                    <div className="footer-copyright__text">
                        <p>&copy;<a>2020 VNDATA - LƯU TRỮ VIỆT</a></p>
                    </div>
                    <ul className="footer-copyright__social">
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;