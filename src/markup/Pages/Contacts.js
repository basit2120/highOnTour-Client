import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleMaps from 'simple-react-google-maps';
import Header2 from './../Layout/Header';
import Footer from './../Layout/Footer';

var bg3 = require('./../../images/contactus.jpg');
class Contacts extends Component {
  render() {
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
              <h1 className='text-white'>Contact Us!</h1>
              <div className='breadcrumb-row'>
                <ul className='list-inline'>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='section-full content-inner bg-white contact-style-1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 d-lg-flex d-md-flex'>
                <div className='p-a30 border m-b30 contact-area border-1 align-self-stretch '>
                  <h4 className='m-b10'>Quick Contact</h4>
                  <p>
                    If you have any questions simply use the following contact
                    details.
                  </p>
                  <ul className='no-margin'>
                    <li className='icon-bx-wraper left m-b30'>
                      <div className='icon-bx-xs border-1'>
                        {' '}
                        <Link className='icon-cell'>
                          <i className='ti-location-pin'></i>
                        </Link>{' '}
                      </div>
                      <div className='icon-content'>
                        <h6 className='text-uppercase m-tb0 dlab-tilte'>
                          Address:
                        </h6>
                        <p>
                          Incubation Lab, First Floor, Huawei Center, U.E.T,
                          Lahore
                        </p>
                      </div>
                    </li>
                    <li className='icon-bx-wraper left  m-b30'>
                      <div className='icon-bx-xs border-1'>
                        {' '}
                        <Link className='icon-cell'>
                          <i className='ti-email'></i>
                        </Link>{' '}
                      </div>
                      <div className='icon-content'>
                        <h6 className='text-uppercase m-tb0 dlab-tilte'>
                          Email:
                        </h6>
                        <p>highontour@gmail.com</p>
                      </div>
                    </li>
                    <li className='icon-bx-wraper left'>
                      <div className='icon-bx-xs border-1'>
                        {' '}
                        <Link className='icon-cell'>
                          <i className='ti-mobile'></i>
                        </Link>{' '}
                      </div>
                      <div className='icon-content'>
                        <h6 className='text-uppercase m-tb0 dlab-tilte'>
                          Mobile
                        </h6>
                        <p>+92 320 4015393</p>
                        <p>+92 313 4853756</p>
                      </div>
                    </li>
                  </ul>
                  <div className='m-t20'>
                    <ul className='dlab-social-icon dlab-social-icon-lg'>
                      <li>
                        <Link className='fa fa-facebook bg-primary'></Link>
                      </li>
                      {/* <li><Link className="fa fa-twitter bg-primary"></Link></li> */}
                      {/* <li><Link className="fa fa-linkedin bg-primary"></Link></li> */}
                      {/* <li><Link className="fa fa-pinterest-p bg-primary"></Link></li> */}
                      <li>
                        <Link className='fa fa-google-plus bg-primary'></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='p-a30 m-b30 	bg-gray clearfix'>
                  <h4>Send Message Us</h4>
                  <div className='dzFormMsg'></div>
                  <form
                    method='post'
                    className='dzForm'
                    action='script/contact.php'
                  >
                    <input type='hidden' value='Contact' name='dzToDo' />
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='form-group'>
                          <div className='input-group'>
                            <input
                              name='dzName'
                              type='text'
                              required
                              className='form-control'
                              placeholder='Your Name'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='form-group'>
                          <div className='input-group'>
                            <input
                              name='dzEmail'
                              type='email'
                              className='form-control'
                              required
                              placeholder='Your Email Id'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='form-group'>
                          <div className='input-group'>
                            <textarea
                              name='dzMessage'
                              rows='4'
                              className='form-control'
                              required
                              placeholder='Your Message...'
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='form-group'>
                          <div className='input-group'>
                            <div
                              className='g-recaptcha'
                              data-sitekey='6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN'
                              data-callback='verifyRecaptchaCallback'
                              data-expired-callback='expiredRecaptchaCallback'
                            ></div>
                            <input
                              className='form-control d-none'
                              data-recaptcha='true'
                              data-error='Please complete the Captcha'
                            />
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <button
                          name='submit'
                          type='submit'
                          value='Submit'
                          className='site-button '
                        >
                          {' '}
                          <span>Submit</span>{' '}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className='col-lg-4 col-md-12 d-lg-flex m-b30'>
                <GoogleMaps
                  apiKey={'AIzaSyDetuhdtT_fkmx7gkMFtZFCxy628266Px8'}
                  style={{ height: '500px', width: '100%' }}
                  zoom={6}
                  center={{ lat: 31.577316, lng: 74.356993 }}
                  markers={{ lat: 31.577316, lng: 74.356993 }} //optional
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Contacts;
