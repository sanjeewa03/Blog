import React from "react";
import NavBar from "../navBar";
import Footer from "../footer";
import Blog from "./blog";
import { Col, Row } from "react-bootstrap";
import Carousel from './carousel';

export default class BlogHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{backgrounb:"rgb(220,220,220)"}}>
      
        <div>
        <div>
          <NavBar  />
          </div>
          <div >
          <Carousel/>
          </div>
        </div>
        <div>
      </div>
        <div>
            <Blog/>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
