import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Header2 from '../Layout/Header';
import Footer from '../Layout/Footer';

const tourContent = [
  {
    image: require('./../../images/tour/muree.jpg'),
  },
];

const tourDay = [
  {
    image: require('./../../images/our-work/pic1.jpg'),
    day: 0,
    title: 'Departure',
    desc: 'Departure from Lahore 10 PM.',
  },
  {
    image: require('./../../images/our-work/pic1.jpg'),
    day: 1,
    title: 'Breakfast at Balakot.',
    desc:
      'Departure from Lahore (10 PM). Breakfast at Balakot. Short stay at Lulusar Lake. Visit Babusar Top. Reach Chilas. Shift to Hotel. Dinner (9 PM).',
  },
  {
    image: require('./../../images/our-work/pic2.jpg'),
    day: 2,
    title: 'Move towards Sakardu',
    desc:
      'Breakfast (7 AM). Departure for Skardu (8 AM). Short Stay at Juglot Junction Point. Reach Skardu. Shift to Hotel. Dinner at (9 PM).',
  },
  {
    image: require('./../../images/our-work/pic3.jpg'),
    day: 3,
    title: 'Sakradu to Deosai',
    desc:
      'Breakfast (8 AM). Departure for Deosai Plains on jeeps (9 AM). Spend Quality time exploring Deosai Plains. Short Stays at Bara Pani, Kala Pani and Sheosar Lake. Reach Hotel. Dinner (8 PM). Overnight hotel stay.',
  },
  {
    image: require('./../../images/our-work/pic4.jpg'),
    day: 4,
    title: 'Departure for Khaplu.',
    desc:
      'Breakfast (8 AM). Departure for Khaplu (9 AM). Visit Manthoka Waterfall. Visit Khaplu Fort. Back to Skardu. Dinner (8 PM). Overnight hotel stay.',
  },
  {
    image: require('./../../images/our-work/pic5.jpg'),
    day: 5,
    title: 'Departure for Shangrila ',
    desc:
      'Breakfast (8 AM). Departure for Shangrila (9 AM). Visit Upper Kachura. Departure for Shigar valley. Short stay at Katpana Desert. Reach Shigar Valley. Spend Quality time there. Explore Shigar Fort. Drive back to Skardu. Dinner (8 PM). Overnight hotel stay.',
  },
  {
    image: require('./../../images/our-work/pic5.jpg'),
    day: 6,
    title: 'Departure for Chilas ',
    desc:
      'Breakfast (7 AM). Departure for Chilas (8 AM). Short stays on the way. Reach Chilas/Naran. Dinner (9 PM). Overnight hotel stays.',
  },
  {
    image: require('./../../images/our-work/pic5.jpg'),
    day: 7,
    title: 'Departure for Lahore',
    desc:
      'Breakfast(8AM). Departure for Lahore. Short Stay at Kiwai Waterfall. Lunch Cum Dinner on the way. Reach Lahore.',
  },
];

var bg3 = require('./../../images/banner/bnr1.jpg');

class BookingDetails extends Component {
  render() {
    var settings = {
      dots: false,
      slidesToShow: 1,
      infinite: true,
      centerPadding: 30,
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
              <h1 className='text-white'>Booking Details</h1>
              <div className='breadcrumb-row'>
                <ul className='list-inline'>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>Booking Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='content-block'>
          <div className='section-full content-inner bg-white'>
            <div className='container'>
              <div className='row m-b30'>
                <div className='col-lg-8'>
                  <div className='d-flex info-bx m-b30'>
                    <div className='tour-title'>
                      <h2>Tour to Skardu</h2>
                      <p>
                        Skardu is a city in Gilgit-Baltistan region of Pakistan,
                        and serves as the capital of Skardu District.
                      </p>
                      <p>
                        <span className='site-button button-sm'>7 Days</span>{' '}
                        <span className='site-button button-sm'>6 Night</span>{' '}
                        Tour
                      </p>
                    </div>
                    <div className='tour-price ml-auto'>
                      <span>Starting From</span>
                      <h2 className='price'>Rs.18,500</h2>
                      <h4 className='actual-price'>Rs.20,500</h4>
                    </div>
                  </div>
                  <div className='product-gallery on-show-slider'>
                    <Slider {...settings}>
                      {tourContent.map((item, index) => (
                        <div className='item' key={index}>
                          <div className='dlab-box'>
                            <div className='dlab-thum-bx'>
                              <img src={item.image} alt='' />
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className='tour-days'>
                    <h2 className='m-b10'>About Itinerary</h2>
                    <p>
                      HighOnTour presents 7 days’ tour towards Skardu and
                      Deosai. Skardu is a city in Gilgit-Baltistan region of
                      Pakistan, and serves as the capital of Skardu District.
                      Skardu, famous for climbing, mountaineering all around the
                      world. Along with this, Skardu host the second Highest
                      mountain of World and Pakistan Highest mountain, K2 (8,611
                      m). Travelling Cost from. Travel in Private
                      Air-Conditioned Vehicle. 6 Night Hotel Stays as per Plan
                      on 3-4 Person Sharing (Beds + Mattresses). Quality Meals
                      (Breakfast + Dinner). Basic First Aid Kit. All Tolls &
                      Taxes. Detailed itinerary of tour is given below:
                    </p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='sticky-top'>
                    <div className='d-flex sp10'>
                      <div className='flex-fill col-6'>
                        <Link
                          className='site-button btn-block'
                          data-toggle='modal'
                          data-target='#exampleModal1'
                        >
                          Book Now
                        </Link>
                      </div>
                      <div className='flex-fill col-6'>
                        <Link
                          className='site-button-secondry btn-block'
                          data-toggle='modal'
                          data-target='#exampleModal'
                        >
                          Submit Query
                        </Link>
                      </div>
                    </div>
                    <div className='m-t50'>
                      <img
                        src={require('./../../images/add/add-bnr.jpg')}
                        className='d-md-none d-xl-block d-lg-block'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>

              {tourDay.map((item, index) => (
                <div className='row m-b30' key={index}>
                  <div className='col-md-3 col-lg-2'>
                    <div className='sticky-top'>
                      <div className='day-details bg-primary'>
                        DAY {item.day}
                      </div>
                    </div>
                  </div>
                  <div className='col-md-9 col-lg-10'>
                    <div className='day-details-bx'>
                      <div className='row'>
                        <div className='col-md-12 col-lg-6'>
                          <h4 className='m-b5'>{item.title}</h4>
                          <div className='m-b10'>
                            <ul className='rating-star'>
                              <li>
                                <i className='fa fa-star'></i>
                              </li>
                              <li>
                                <i className='fa fa-star'></i>
                              </li>
                              <li>
                                <i className='fa fa-star'></i>
                              </li>
                              <li>
                                <i className='fa fa-star'></i>
                              </li>
                              <li>
                                <i className='fa fa-star'></i>
                              </li>
                            </ul>
                          </div>
                          <p>{item.desc}</p>
                          <ul className='tour-tag'>
                            <li>
                              <Link>Breakfast</Link>
                            </li>
                            <li>
                              <Link>Dinner</Link>
                            </li>
                          </ul>
                        </div>
                        <div className='col-md-12 col-lg-6'>
                          <img src={item.image} className='radius-sm' alt='' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default BookingDetails;
