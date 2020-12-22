import React from 'react';
import "./Products.scss"
import { Container } from 'reactstrap';
import { PRODUCTS_LEFT, PRODUCTS_RIGHT, TITLE_PRODUCTS } from '../../../constant/global';
import Title from '../../../components/Title/Title';
import Images from '../../../constant/images';
Products.propTypes = {

};
const ProductItem = ({ img, title, desc }) => {
    return (
        <div className="product-item">
            <div className="product-item__img">
                <img src={img} />
            </div>
            <div className="product-item__box-content">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}
function Products(props) {
    return (
        <Container>
            <Title title={TITLE_PRODUCTS.title} text={TITLE_PRODUCTS.text} subTitle={TITLE_PRODUCTS.subTitle} />
            <div className="product">
                <div className="product-left w-33">
                    {PRODUCTS_LEFT.map((product) => (
                        <ProductItem key={product.id} img={product.img} title={product.title} desc={product.desc} />
                    ))}
                </div>
                <div className="product-center w-33">
                    <img className="product-image" src={Images.PRODUCT} />
                </div>
                <div className="product-right w-33">
                    {PRODUCTS_RIGHT.map((product, idx) => (
                        <ProductItem key={`product-item-${idx.id}`} img={product.img} title={product.title} desc={product.desc} />
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default Products;