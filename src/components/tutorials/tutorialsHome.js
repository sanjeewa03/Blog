import React from 'react';
import NavBar from '../navBar';
import Footer from '../footer';

export default class TutorialsHome extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <NavBar/>
                <Footer/>
            </div>
        );
    }
}