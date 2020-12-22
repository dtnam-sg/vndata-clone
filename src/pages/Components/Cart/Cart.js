import React from 'react';
import "./CartList.scss"
import { Container } from 'reactstrap';
import Title from '../../../components/Title/Title';
import { HEADER, CARTS } from '../../../constant/global';


const Cart = ({ img, title, desc }) => {
    return (
        <div className="why-choose-us">
            <div className="why-choose-us__img">
                <img src={img} />
            </div>
            <h3 className="why-choose-us__title">{title}</h3>
            <p className="why-choose-us__desc" >{desc}</p>
        </div>
    );
}

function CartList() {
    return (
        <Container className="mt-90">
            <Title title={HEADER.title} text={HEADER.text} subTitle={HEADER.subTitle} />
            <div className="why-choose-us__cart-list">
                {
                    CARTS.map((cart, idx) => (
                        <Cart img={cart.img} key={`cart-${cart.id}`} title={cart.title} desc={cart.desc} />
                    ))
                }
            </div>
        </Container>
    )
}

export default CartList;