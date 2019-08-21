import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <>
        <HomeCarousel />
        < div className="container">
          <section className="home-content">
            <h2>Bookbeauty is your beauty website</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
              1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </section>
        </div>
      </>
    );
  }
}

class HomeCarousel extends Component {
  render() {
    return (
      <div className="container">

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://geebeauty.com.au/wp-content/themes/gee/img/services-hands.jpg"
              alt="First slide"
              width='800px' height='450px'
            />
            <Carousel.Caption>
              <h3>Explore Treatments</h3>
              <p>Nails</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://toplevelsalon.com/wp-content/uploads/b2b/stock/v2/bigstock/bigstock-Beautiful-lady-with-long-brown-12127595.jpg?&a=t"
              alt="Third slide"
              width='800px' height='450px'
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3> */}
              <p>Hairdressing</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://stylemagazines.com.au/wp-content/uploads/2015/01/shutterstock_232611751.jpg"
              alt="Third slide"
              width='800px' height='450px'
            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3> */}
              <p>Eyes, Brows & Lashes</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </div>
    );
  }
}
export default Home;


