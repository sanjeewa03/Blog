import React from 'react';
import NavBar from '../navBar';
import Footer from '../footer';

export default class Products extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return  (
            <div>
                <NavBar Active="Product" />
                <Footer/>
            </div>
        );
    }
}