import React from 'react';
import NavBar from '../navBar';

export default class Products extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <NavBar Active="Product" />;
    }
}