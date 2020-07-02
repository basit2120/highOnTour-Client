import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Link } from 'react-router-dom';
import Slick from './Slick';
import TopPlaces from './../Element/TopPlaces';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

const content = [
  {
    title: 'Customize Your Trip To Hunza & Naltar Valley',
    button: 'Discover ',
    image: require('./../../images/main-slider/slide1.jpg'),
  },
  {
    title: '5 Days Trip To Hunza & Naltar Valley',
    button: 'Discover',
    image: require('./../../images/main-slider/slide2.jpg'),
  },
  {
    title: 'Customize Your Trip To Kashmir',
    button: 'Discover',
    image: require('./../../images/main-slider/slide3.jpg'),
  },
  {
    title: 'Customize Your Trip To Naran Kaghan Valley',
    button: 'Discover',
    image: require('./../../images/main-slider/slide4.jpg'),
  },
];

var bg1 = require('./../../images/background/bg1.jpg');
// var bg3 = require('./../../images/background/bg3.jpg');
var bg4 = require('./../../images/background/pro.jpg');

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='page-content'>
          <Slider className='slider-wrapper' infinite autoplay>
            {content.map((item, index) => (
              <div
                key={index}
                className='slider-content'
                style={{
                  background: `url('${item.image}') no-repeat center center`,
                }}
              >
                <div className='inner'>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button className='site-button'>{item.button}</button>
                </div>
              </div>
            ))}
          </Slider>

          <div
            className='section-full book-form overlay-black-dark bg-img-fix p-t30 p-b10 mid'
            style={{ backgroundImage: 'url(' + bg1 + ')' }}
          >
            <div className='container'>
              <form className='row'>
                <div className='col-md-4 col-sm-6 col-6 col-lg-2 form-group'>
                  <label>Keywords</label>
                  <input
                    className='form-control'
                    placeholder='Enter Zip Code'
                    type='text'
                  />
                </div>
                <div className='col-md-4 col-sm-6 col-6 col-lg-2 form-group'>
                  <label>Activity</label>
                  <select className='form-control'>
                    <option>Any</option>
                    <option>Hiking</option>
                    <option>Skating</option>
                    <option>Bone-Fire</option>
                    <option>Rafting</option>
                  </select>
                </div>
                <div className='col-md-4 col-sm-6 col-6 col-lg-2 form-group'>
                  <label>Destination</label>
                  <select className='form-control'>
                    <option>Any</option>
                    <option>Mushkpuri Top</option>
                    <option>Kalam</option>
                    <option>Naran Kaghan</option>
                    <option>Fairy Meadows</option>
                    <option>Gillgit Baltistan</option>
                    <option>Azad Kashmir</option>
                    <option>Murree</option>
                    <option>K-2</option>
                    <option>Sakardu</option>
                  </select>
                </div>
                <div className='col-md-4 col-sm-6 col-6 col-lg-2 form-group'>
                  <label>Duration</label>
                  <select className='form-control'>
                    <option>Any</option>
                    <option>1 Day Tours</option>
                    <option>3 Days Tours</option>
                    <option>Weekly Tours</option>
                    <option>Fortnight Tours</option>
                    <option>Monthly Tours</option>
                  </select>
                </div>
                {/* <div className="col-md-4 col-sm-6 col-6 col-lg-2 form-group">
                                    <label>Date</label>
                                    <input type='text' className="form-control" id='datetimepicker4' />
                                </div> */}
                <div className='col-md-4 col-sm-6 col-6 col-lg-2 form-group'>
                  <label>Find</label>
                  <Link to={'/place'} className='site-button btn-block'>
                    SEARCH
                  </Link>
                </div>
              </form>
            </div>
          </div>

          <TopPlaces />

          <div
            className='section-full bg-white content-inner-2 bgeffect overlay-black-middle'
            style={{
              backgroundImage: 'url(' + bg4 + ')',
              backgroundSize: 'cover',
            }}
          >
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 col-md-12'>
                  <div className='add-area'>
                    <h3>Special Offers</h3>
                    <h2>
                      Premiume <span className='text-primary'>Package</span>
                    </h2>
                    <p>
                      If you’re looking for a truly memorable family break here
                      you find the lowest price on the right hotel for you. It's
                      indescribable. Stay up to date and check out the deals for
                      these trending destinations.
                    </p>
                    <Link to='' className='site-button white'>
                      See Promotion Tours
                    </Link>
                  </div>
                </div>
                <div className='col-lg-6 col-md-6'></div>
              </div>
            </div>
          </div>

          <Slick />

          <div className='section-full bg-white content-inner dlab-about-1 promotions'>
            <div className='container'>
              <div className='section-head text-black text-center'>
                <h2 className='text-uppercase m-b0'>PACKAGES</h2>
                <p className='font-18'>BEST TRAVEL PACKAGES </p>
              </div>
              <div className='row packages'>
                <div className='col-lg-6 col-xl-3 col-sm-6 col-md-6 m-b30'>
                  <div className='dlab-box'>
                    <div className='dlab-media'>
                      <Link to={'./MalamJabba'}>
                        <img
                          src={require('./../../images/gallery/img4.jpg')}
                          alt=''
                        />
                      </Link>
                    </div>
                    <div className='dlab-info p-a15 border-1'>
                      <h4 className='dlab-title m-t0'>
                        <Link to={'./MalamJabba'}>Weekdays in MalamJabba</Link>
                      </h4>
                      <span className='location'>Swat, Khyber Pakhtunkhwa</span>
                      <div className='package-content'>
                        <ul className='package-meta'>
                          <li>
                            <span className='fa fa-calendar'></span> No of Days:
                            7{' '}
                          </li>
                          <li>
                            {'  '}
                            <span className='fa fa-user'></span> People: 23{' '}
                          </li>
                        </ul>
                        <div className='clearfix'>
                          <span className='package-price pull-left text-primary'>
                            Rs 8000
                          </span>
                          <Link
                            to={'./MalamJabba'}
                            className='site-button pull-right'
                          >
                            View details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-xl-3 col-sm-6 col-md-6 m-b30'>
                  <div className='dlab-box'>
                    <div className='dlab-media'>
                      <Link>
                        <img
                          src={require('./../../images/gallery/img3.jpg')}
                          alt=''
                          to={'./FairyMeadows'}
                        />
                      </Link>
                    </div>
                    <div className='dlab-info p-a15 border-1'>
                      <h4 className='dlab-title m-t0'>
                        <Link to={'./FairyMeadows'}>
                          Weekdays in Fairy Meadows
                        </Link>
                      </h4>
                      <span className='location'>
                        Khyber Pakhtunkhwa, Pakistan
                      </span>
                      <div className='package-content'>
                        <ul className='package-meta'>
                          <li>
                            <span className='fa fa-calendar'></span> No of Days:
                            7{' '}
                          </li>
                          <li>
                            {' '}
                            <span className='fa fa-user'></span> People: 27{' '}
                          </li>
                        </ul>
                        <div className='clearfix'>
                          <span className='package-price pull-left text-primary'>
                            Rs 8000
                          </span>
                          <Link
                            to={'./FairyMeadows'}
                            className='site-button pull-right'
                          >
                            View details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-xl-3 col-sm-6 col-md-6 m-b30'>
                  <div className='dlab-box'>
                    <div className='dlab-media'>
                      <Link>
                        <img
                          src={require('./../../images/gallery/img5.jpg')}
                          alt=''
                          to={'./Hunza'}
                        />
                      </Link>
                    </div>
                    <div className='dlab-info p-a15 border-1'>
                      <h4 className='dlab-title m-t0'>
                        <Link to={'./Hunza'}>Weekdays in Hunza</Link>
                      </h4>
                      <span className='location'>Azad Kashmir, Pakistan</span>
                      <div className='package-content'>
                        <ul className='package-meta'>
                          <li>
                            <span className='fa fa-calendar'></span> No of Days:
                            7{' '}
                          </li>
                          <li>
                            {' '}
                            <span className='fa fa-user'></span> People: 10{' '}
                          </li>
                        </ul>
                        <div className='clearfix'>
                          <span className='package-price pull-left text-primary'>
                            Rs 8000
                          </span>
                          <Link
                            to={'./Hunza'}
                            className='site-button pull-right'
                          >
                            View details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-xl-3 col-sm-6 col-md-6 m-b30'>
                  <div className='dlab-box'>
                    <div className='dlab-media'>
                      <Link>
                        <img
                          src={require('./../../images/gallery/img6.jpg')}
                          alt=''
                          to={'./Thandiani'}
                        />
                      </Link>
                    </div>
                    <div className='dlab-info p-a15 border-1'>
                      <h4 className='dlab-title m-t0'>
                        <Link to={'./Thandiani'}>Weekdays in Thandiani</Link>
                      </h4>
                      <span className='location'>Pakistan</span>
                      <div className='package-content'>
                        <ul className='package-meta'>
                          <li>
                            <span className='fa fa-calendar'></span> No of Days:
                            7{' '}
                          </li>
                          <li>
                            {' '}
                            <span className='fa fa-user'></span> People: 14{' '}
                          </li>
                        </ul>
                        <div className='clearfix'>
                          <span className='package-price pull-left text-primary'>
                            Rs 8000
                          </span>
                          <Link
                            to={'./Thandiani'}
                            className='site-button pull-right'
                          >
                            View details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Homepage;
