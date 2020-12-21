import React from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import { Col, Container, Row } from 'reactstrap';
import Images from "../../constant/images"
import "./Header.scss"
Header.propTypes = {

};

function Header(props) {
    return (
        <>
            <TopBar />
            <header className="header">
                <Container>
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <img src={Images.LOGO_VNDATA} />
                        </Col>
                        <Col>
                            <ul className="header__menu">
                                <li><a href="#">Trang chủ</a></li>
                                <li><a href="#">Sản phẩm</a></li>
                                <li><a href="#">Thông tin</a></li>
                                <li><a href="#">Thanh toán</a></li>
                                <li><a href="#">Liên hệ</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
}

export default Header;