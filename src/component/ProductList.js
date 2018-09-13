import React from 'react';
import axios from 'axios';

import Product from './Product';
import feedback from '../data';

class ProductList extends React.Component {

    constructor(){
        super();
        /* this.state={
            products:feedback
        } */
        this.state={
            products:[]
        }
        this.voteClicked = this.voteClicked.bind(this);
    }

    componentWillMount(){
        this.getApiData()
    }

    getApiData(){
        axios.get("http://localhost:4444/feeds")
            .then((response)=>{
                //console.log(response.data);
                this.setState({products: response.data})
            })
    }

    voteClicked(id, check){
        console.log("Upvote clicked for " + id);
        const updatedProducts= this.state.products.map((p1)=>{
            if(p1.id === id && check===1){
                console.log("m here 1")
                return Object.assign({},p1,{vote:p1.vote+1})
            }else if(p1.id === id && check===0){
                console.log("m here 0")
                return Object.assign({},p1,{vote:p1.vote-1})
            }else{
                return p1
            }
        })
        this.setState({products: updatedProducts})
        console.log(this.state.products);
    }
    
    render() { 

        //const product = feedback[0];
        //console.log(product);

        //const product = feedback;

        const sortedProducts = this.state.products.sort((a,b)=>(b.vote-a.vote))

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
                    vote={feed.vote}
                    onCheck={this.voteClicked}>
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
