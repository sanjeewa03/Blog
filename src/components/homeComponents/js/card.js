import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import '../css/card.css';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function CardModel() {
  const classes = useStyles();

  return (
    <div class="explore" id="explora">

  <div class="container">

    <h2 data-aos="fade-down">Explore Our
      <span class="a"> Best Products</span>
      <hr/>
    </h2 >
    <div class="card-group" id="ex-1" >
        
     <div class="card" data-aos="zoom-in" >
        <img class="card-img-top" src="./carousel1.png" height="150px" width="100px" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Konnect</h5>
          <p class="card-text">Internet Speed | Wi-Fi | Data Usage</p>
        </div>
      </div>
      <div class="card" data-aos="zoom-in">
        <img class="card-img-top" src="./1.jpg" height="150px" width="100px" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Show Wifi Password</h5>
          <p class="card-text">Wi-Fi </p>
        </div>
      </div>
              
      <div class="card" data-aos="zoom-in">
        <img class="card-img-top" src="./2.jpg" height="150px" width="100px" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Galle</h5>
          <p class="card-text">Beach | Commercial | Nature</p>
        </div>
      </div>
      <div class="card" data-aos="zoom-in">
        <img class="card-img-top" src="./3.jfif" height="150px" width="100px" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Jaffna</h5>
          <p class="card-text">Ancient | Religious | Historical</p>
        </div>
      </div>
      <div class="card" data-aos="zoom-in">
        <img class="card-img-top" src="./4.jfif" height="150px" width="100px" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Colombo</h5>
          <p class="card-text">Capital | Shopping | Beach</p>
        </div>
      </div>
    </div>



  </div>
</div>
    
  );
}

export default function List(){
    return (
        
        <CardModel/>
        
    )
}