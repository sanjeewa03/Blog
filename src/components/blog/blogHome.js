import React from 'react';
import NavBar from '../navBar';
import Footer from '../footer';

export default class BlogHome extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
            
                <NavBar />
                <h1>blog</h1>
                <Footer/>
            </div>
        );
    }
}