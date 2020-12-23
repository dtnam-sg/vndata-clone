import React from 'react';
import "./HomePage.scss"
import Header from '../../components/Header/Header';
import ProductPricing from '../Components/ProductPricing/ProductPricing';
import CartList from '../Components/Cart/Cart';
import Products from '../Components/Products/Products';
import Partner from '../Components/Partner/Partner';
import Footer from '../Components/Footer/Footer';

HomePage.propTypes = {};

function HomePage(props) {
    return (
        <div>
            <Header />
            <CartList />
            <Products />
            <ProductPricing />
            <Partner />
            <Footer />
        </div>
    );
}

export default HomePage;