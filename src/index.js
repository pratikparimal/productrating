import React from 'react';
import ReactDOM from 'react-dom';
import Product from './component/Product';
import ProductList from './component/ProductList';

/* var product= document.getElementById("product");
ReactDOM.render(
    <Product></Product>,product
) */

var productList= document.getElementById("productList");
ReactDOM.render(
    <ProductList></ProductList>,productList
)