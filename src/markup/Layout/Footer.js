import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var bg3 = require('./../../images/background/bg6.jpg');

class Footer extends Component {
  render() {
    return (
      <footer className='site-footer style1'>
        <div
          className='footer-top'
          style={{
            backgroundImage: 'url(' + bg3 + ')',
            backgroundSize: 'cover',
          }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-sm-5 footer-col-4'>
                <div className='widget widget_getintuch'>
                  <h6 className='m-b15 h6 text-uppercase'>Contact Us</h6>
                  <div className='dlab-separator bg-white'></div>
                  <ul className='info-contact'>
                    <li>
                      <span>
                        <i className='fa fa-map-marker	'></i> Incubation Lab,
                        First Floor, Huawei Center, U.E.T, Lahore
                      </span>
                    </li>

                    <li>
                      <span>
                        <i className='fa fa-phone'></i> +92 320 4015393 <br />
                        +92 313 4853756
                      </span>
                    </li>

                    <li>
                      <span>
                        <i className='fa fa-envelope-o'></i>{' '}
                        highontour@gmail.com
                      </span>
                    </li>
                    {/* <li>
                                            <span>
                                                <i className="fa fa-fax"></i> Fax: 000 123 2294 089
									</span>
                                        </li> */}
                  </ul>
                </div>
                <ul className='list-inline'>
                  <li>
                    <a
                      href={'https://www.facebook.com/highontour/'}
                      className='site-button facebook sharp'
                    >
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href={'https://www.instagram.com/highontour/'}
                      className='site-button linkedin sharp'
                    >
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className='col-lg-4 col-md-6 col-sm-6 footer-col-4'>
                <div className='widget widget_getintuch'>
                  <h6 className='m-b15 h6 text-uppercase'>Your Message</h6>
                  <div className='dlab-separator bg-white'></div>
                  <div className='search-bx'>
                    <div className='dzFormMsg'></div>
                    <form
                      method='post'
                      className='dzForm'
                      action='script/contact.php'
                    >
                      <input type='hidden' value='Contact' name='dzToDo' />
                      <div className='input-group'>
                        <input
                          name='dzName'
                          type='text'
                          required
                          className='form-control'
                          placeholder='Your Name'
                        />
                      </div>
                      <div className='input-group'>
                        <input
                          name='dzEmail'
                          type='email'
                          className='form-control'
                          required
                          placeholder='Your Email Address'
                        />
                      </div>
                      <div className='input-group'>
                        <textarea
                          name='dzMessage'
                          rows='4'
                          className='form-control'
                          required
                          placeholder='Your Message...'
                        ></textarea>
                      </div>
                      <div className='input-group'>
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
                    </form>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 col-sm-6 footer-col-4'>
                <div className='widget widget_gallery'>
                  <h6 className='m-b15 h6 text-uppercase'>GALLERY</h6>
                  <div className='dlab-separator bg-white'></div>
                  <ul className='clearfix mfp-gallery'>
                    <li className='img-effect2'>
                      <Link
                        to={''}
                        className='mfp-link'
                        title='Title Come Here'
                      >
                        <img
                          src={require('./../../images/gallery/img1.jpg')}
                          alt=''
                        />
                      </Link>{' '}
                    </li>
                    <li className='img-effect2'>
                      <Link
                        to={''}
                        className='mfp-link'
                        title='Title Come Here'
                      >
                        <img
                          src={require('./../../images/gallery/img2.jpg')}
                          alt=''
                        />
                      </Link>{' '}
                    </li>
                    <li className='img-effect2'>
                      <Link
                        to={''}
                        className='mfp-link'
                        title='Title Come Here'
                      >
                        <img
                          src={require('./../../images/gallery/img3.jpg')}
                          alt=''
                        />
                      </Link>{' '}
                    </li>
                    <li className='img-effect2'>
                      <Link
                        to={''}
                        className='mfp-link'
                        title='Title Come Here'
                      >
                        <img
                          src={require('./../../images/gallery/img4.jpg')}
                          alt=''
                        />
                      </Link>{' '}
                    </li>
                    <li className='img-effect2'>
                      <Link
                        to={''}
                        className='mfp-link'
                        title='Title Come Here'
                      >
                        <img
                          src={require('./../../images/gallery/img5.jpg')}
                          alt=''
                        />
                      </Link>{' '}
                    </li>
                    <li className='img-effect2'>
                      <Link
                        to={''}
                        className='mfp-link'
                        title='Title Come Here'
                      >
                        <img
                          src={require('./../../images/gallery/img6.jpg')}
                          alt=''
                        />
                      </Link>{' '}
                    </li>
                    <li className='img-effect2'>
                      <Link
                        to={''}
                        className='mfp-link'
                        title='Title Come Here'
                      >
                        <img
                          src={require('./../../images/gallery/img7.jpg')}
                          alt=''
                        />
                      </Link>{' '}
                    </li>
                    <li className='img-effect2'>
                      <Link
                        to={''}
                        className='mfp-link'
                        title='Title Come Here'
                      >
                        <img
                          src={require('./../../images/gallery/img8.jpg')}
                          alt=''
                        />
                      </Link>{' '}
                    </li>
                    <li className='img-effect2'>
                      <Link
                        to={''}
                        className='mfp-link'
                        title='Title Come Here'
                      >
                        <img
                          src={require('./../../images/gallery/img9.jpg')}
                          alt=''
                        />
                      </Link>{' '}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 col-md-12 text-center'>
                {' '}
                <span>Copyright © High On Tour</span>{' '}
              </div>
              {/* <div className="col-lg-6 col-md-6 text-right "><span> Design With <i className="fa fa-heart text-primary heart"></i> By Basit Ali </span> </div> */}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
