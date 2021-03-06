import React from "react";
import Button from "../../../components/Button/Button";
import { Container } from "reactstrap";
import { CART_PRICING, MAIN_PRODUCTS } from "../../../constant/global";
import Title from "../../../components/Title/Title";
import "./ProductPricing.scss"

ProductPricing.propTypes = {};

const CartPricing = ({
    img,
    title,
    desc,
    priceFrom,
    price,
    textButton,
    buttonStyle,
}) => {
    return (
        <div className="w-33 pricing-item">
            <div className="pricing-item__header">
                <img src={img} />
                <h4>{title}</h4>
            </div>
            <div className="pricing-item__body">
                <p>{desc}</p>
                <div className="pricing-item__body-detail">
                    <p>{priceFrom}</p>
                    <h2>{price}</h2>
                </div>
            </div>
            <div>
                <Button text={textButton} buttonStyle={buttonStyle} />
            </div>
        </div>
    );
};

function ProductPricing(props) {
    return (
        <Container>
            <Title
                title={MAIN_PRODUCTS.title}
                text={MAIN_PRODUCTS.text}
                subTitle={MAIN_PRODUCTS.subTitle}
            />
            <div className="pricing">
                {CART_PRICING.map((item, idx) => (
                    <CartPricing
                        index={`pricinng-${item.id}`}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        priceFrom={item.priceFrom}
                        price={item.price}
                        textButton={item.text}
                        buttonStyle={item.buttonStyle}
                    />
                ))}
            </div>
        </Container>
    );
}

export default ProductPricing;
