import React from 'react';


export default class AboutUs extends React.Component {
    render(){
        return(
            <section class="about_history_area section_gap"id="aboutus">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 d_flex align-items-center">
                            <div class="about_content ">
                                <h2 class="title title_color">About <span class="a">Us</span> </h2>
                                <p><b>Backpacking Sri Lanka</b> is a newly establised tour planning agency which provides you excellent services to plan your tour in Sri Lanka. Plus Safari arrangements and Hotels reservation by the time you spend in Sri Lanka. We ready to provide a remarkable services with full of hospitality and to make your tour more interesting. Join with us to explore our services.</p>
                                <h6>Happy Time in Sri Lanka!</h6>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <img class="img-fluid" src="/about.jpg" alt="img"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}