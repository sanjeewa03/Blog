import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-bootstrap/Carousel'
import { Container, Grid,CssBaseline } from "@material-ui/core";
import Card2 from './card2';

export default function carousel() {
  return (
    <div style={{alignItem: 'center'}}>
    
      <Grid style={{height:"70vh" ,background:"rgb(220,220,220"}}>
        <Carousel >
          <Carousel.Item  >
          <Card2  />
          </Carousel.Item>
          <Carousel.Item >
          <Card2/>
          </Carousel.Item>
          <Carousel.Item  >
          <Card2/>
          </Carousel.Item>
          <Carousel.Item  >
          <Card2/>
          </Carousel.Item>
        </Carousel>
      </Grid>
      </div>
  );
}
