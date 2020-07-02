import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Header2 from './../Layout/Header';
import Footer from './../Layout/Footer';

const aboutBlog = [
  {
    image: require('./../../images/AboutUs/TourDe Miranjani.jpg'),
    date: 'September 10, 2017',
    comment: '5k',
    title: 'Tour De Miranjani',
  },
  {
    image: require('./../../images/AboutUs/TourDeFairyMeadows.jpg'),
    date: 'September 10, 2017',
    comment: '5k',
    title: 'Tour De Fairy Meadows',
  },
  {
    image: require('./../../images/Topplaces/mushkpuritop.jpg'),
    date: 'September 10, 2017',
    comment: '5k',
    title: 'Tour De Mushkpuritop',
  },
  {
    image: require('./../../images/Topplaces/MalumJuba.jpg'),
    date: 'September 10, 2017',
    comment: '5k',
    title: 'Tour De Malam Jabba',
  },
];

var bg1 = require('./../../images/AboutUs/AboutUs.jpg');
var bg3 = require('./../../images/AboutUs/AboutUs.jpg');

function SampleNextArrow(props) {
  const { onClick } = props;
  return <div className='la la-angle-right nav-right' onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <div className='la la-angle-left nav-left' onClick={onClick} />;
}

class About extends Component {
  render() {
    var settings = {
      dots: false,
      slidesToShow: 3,
      infinite: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Header2 />
        <div
          className='dlab-bnr-inr overlay-black-middle'
          style={{
            backgroundImage: 'url(' + bg3 + ')',
            backgroundSize: 'cover',
          }}
        >
          <div className='container'>
            <div className='dlab-bnr-inr-entry'>
              <h1 className='text-white'>About Us</h1>
              <div className='breadcrumb-row'>
                <ul className='list-inline'>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='content-block'>
          <div className='section-full content-inner overlay-white-middle'>
            <div className='container'>
              <div className='row align-items-start m-b20'>
                <div className='col-md-12 col-lg-6'>
                  <h2>
                    Book your tours today with High On Tour because we make the
                    best for all our customers.
                  </h2>
                </div>
                <div className='col-md-6 col-lg-3'>
                  <p>
                    HighOnTour with the motto of "Wander. Explore. Discover."
                    aims to provide the customer with best suitable package
                    whether the customer wants to customize a group tour or
                    wants to go with an event tour
                  </p>
                </div>
                <div className='col-md-6 col-lg-3'>
                  <p>
                    also allowing the customer to do an online purchase of
                    things that are very famous but not easily available in
                    areas like Lahore, for example Shawls of Naran, honey from
                    Murree etc.
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-6 m-b30 col-12'>
                  <img src={require('./../../images/1a.jpg')} alt='' />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-6 m-b30 col-12'>
                  <img src={require('./../../images/1b.jpg')} alt='' />
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-3 col-md-6 col-12 col-sm-6 m-b30'>
                  <div className='counter-style-1'>
                    <div className=''>
                      <i className='icon ti-bar-chart text-primary'></i>
                      <span className='counter'>4</span>
                    </div>
                    <span className='counter-text'>Successful Tours</span>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12 col-sm-6 m-b30'>
                  <div className='counter-style-1'>
                    <div className=''>
                      <i className='icon ti-user text-primary'></i>
                      <span className='counter'>450+</span>
                    </div>
                    <span className='counter-text'>Happy Travellers</span>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12 col-sm-6 m-b30'>
                  <div className='counter-style-1'>
                    <div className=''>
                      <i className='icon ti-headphone-alt text-primary'></i>
                      <span className='counter'>30</span>
                    </div>
                    <span className='counter-text'>Video Projects</span>
                  </div>
                </div>
                <div className='col-lg-3 col-md-6 col-12 col-sm-6 m-b30'>
                  <div className='counter-style-1'>
                    <div className=''>
                      <i className='icon ti-cup text-primary'></i>
                      <span className='counter'>8</span>
                    </div>
                    <span className='counter-text'>Awards's</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className='section-full bg-white content-inner-2 bgeffect overlay-black-middle'
            style={{
              backgroundImage: 'url(' + bg1 + ')',
              backgroundSize: 'cover',
            }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12 text-center col-md-12'>
                  <div className='add-area'>
                    <h3>1000 $ for person - 6 nights</h3>
                    <h2>
                      Discount <span className='text-primary'>10-30%</span> Off
                    </h2>
                    <p>
                      If you’re looking for a truly memorable family break here
                      you find the lowest price on the right hotel for you. It's
                      indescribable. Stay up to date and check out the deals for
                      these trending destinations.
                    </p>
                    <Link className='site-button white'>
                      See Promotion Tours
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='content-inner-2 overlay-white-middle'>
            <div className='container'>
              <div className='section-head text-black text-center'>
                <h2 className='text-uppercase m-b0'>Recent Tours with us</h2>
              </div>
              <Slider
                className='blog-carousel nav-btn-center-lr btn-1'
                {...settings}
              >
                {aboutBlog.map((item, index) => (
                  <div className='item p-3' key={index}>
                    <div className='blog-post blog-grid blog-style-1'>
                      <div className='dlab-post-media dlab-img-effect radius-sm'>
                        <Link>
                          <img src={item.image} alt='' />
                        </Link>
                      </div>
                      <div className='dlab-info'>
                        <div className='dlab-post-meta'>
                          <ul className='d-flex align-items-center'>
                            <li className='post-date'>{item.date}</li>
                            <li className='post-comment'>
                              <Link>{item.comment}</Link>{' '}
                            </li>
                          </ul>
                        </div>
                        <div className='dlab-post-title '>
                          <h5 className='post-title font-20'>
                            <Link to={'./about'}>{item.title}</Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default About;
