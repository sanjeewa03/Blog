import React from 'react';
import './footer.css';

export default class Footer extends React.Component{
    render(){
        return (
            <footer class="footer">

        <div class="container">
           <div class="row  justify-content-md-center" id="subscribe">
            <div class="col-md-5">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Subscribe to our newsletter" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button">Subscribe</button>
                </div>
              </div>
            </div>
          </div> 
    
          <div class="row  justify-content-md-center" id="footer_links">
            <a href="terms.php">
              <p>T &amp; C</p>
            </a>
            <a href="/blog">
                <p>Blog</p>
              </a>
            <a href="/tutorials">
              <p>Tutorials</p>
            </a>
            <a href="/products">
              <p>Products</p>
            </a>
            <a href="#about">
              <p>About Us</p>
            </a>
            <a href="#contact">
              <p>Contact Us</p>
            </a>
          </div>
          
          <div class="rights">
            <h6>© 2019 Backpacking Sri Lanka. All Rights Reserved</h6>
    
            <a href="/">
              <p>Backpacking Sri Lanka</p>
            </a>
    
          </div>
        </div>
        
    
      </footer>
        );
    }
}