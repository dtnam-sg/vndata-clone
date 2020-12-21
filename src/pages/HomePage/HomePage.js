import React from 'react';
import PropTypes from 'prop-types';
import "./HomePage.scss"
import Header from '../../components/Header/Header';
import CartList from '../Cart/Cart';
import Products from '../Products/Products';

HomePage.propTypes = {

};

function HomePage(props) {
    return (
        <div>
            <Header />
            <CartList />
            <Products />
        </div>
    );
}

export default HomePage;