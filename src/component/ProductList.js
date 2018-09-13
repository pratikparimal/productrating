import React from 'react';

import Product from './Product';
import feedback from '../data';

class ProductList extends React.Component {

    constructor(){
        super();
        this.state={
            products:feedback
        }
    }
    
    render() { 

        //const product = feedback[0];
        //console.log(product);

        const product = feedback;

        const sortedProducts = product.sort((a,b)=>(b.vote-a.vote))

        const allproducts = sortedProducts.map((feed)=>{
            return(
                <Product
                    key={feed.id}
                    id={feed.id}
                    title={feed.title}
                    description={feed.description}
                    url={feed.url}
                    imageUrl={feed.imageUrl}
                    submit={feed.submit}
                    vote={feed.vote}>
                </Product>
            );
        })

        return ( 
            <div className="main ui text container">
                <div className="ui dividing center header">
                    <div className="ui unstackable items">
                        {allproducts}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProductList;
