import React from "react";
import NavBar from "../navBar";
import Footer from "../footer";
import Blog from "./blog";
import { Col, Row } from "react-bootstrap";

import MultiCarouselPage from "./test";

export default class BlogHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      
        <div>
          <NavBar />
        </div>
        <div>
        <Row>
      <MultiCarouselPage/>
      </Row>
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
