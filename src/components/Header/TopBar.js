import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from "reactstrap"
import "./TopBar.scss"

TopBar.propTypes = {

};

function TopBar(props) {
    return (
        <div className="wraper">
            <Container>
                <Row>
                    <Col md="6">
                        <ul className="top-bar top-bar__left">
                            <li><i className="fas fa-phone"></i>0971-05-4444</li>
                            <li><i className="far fa-envelope"></i>info@vndata.vn</li>
                        </ul>
                    </Col>
                    <Col md="6">
                        <ul className="top-bar top-bar__right">
                            <li><i className="fas fa-phone"></i>Đăng nhập</li>
                            <li><i className="far fa-envelope"></i>Đăng ký</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TopBar;