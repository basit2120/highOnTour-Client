import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header2 from '../Layout/Header';
import Footer from '../Layout/Footer';

const packageContent = [
  {
    image: require('./../../images/products/df.jpg'),
    title: 'Dry Fruits',
    subtitle: 'Jaglot',
    // days: 2,
    // people: 1,
    price: 300,
  },
  {
    image: require('./../../images/products/honey.jpg'),
    title: 'Honey',
    subtitle: 'Patriata, Bahrain',
    // days: 2,
    // people: 1,
    price: 300,
  },
  {
    image: require('./../../images/products/krhai.jpg'),
    title: 'Weekdays in Thailand',
    subtitle: 'Bahrain, Kaghan',
    // days: 2,
    // people: 1,
    price: 300,
  },
  {
    image: require('./../../images/products/Shawl.jpeg'),
    title: 'Shwal',
    subtitle: 'kaghan, Bahrain',
    // days: 2,
    // people: 1,
    price: 300,
  },
];

var bg3 = require('./../../images/banner/bnr1.jpg');
class Products extends Component {
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
              <h1 className='text-white'>Products</h1>
              <div className='breadcrumb-row'>
                <ul className='list-inline'>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>Products</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='section-full bg-white content-inner dlab-about-1 promotions'>
          <div className='container'>
            <div className='row packages'>
              {packageContent.map((item, index) => (
                <div className='col-md-6 col-xl-3  col-sm-6 m-b20' key={index}>
                  <div className='dlab-box'>
                    <div className='dlab-media'>
                      <Link to={'./booking'}>
                        <img src={item.image} alt='' />{' '}
                      </Link>
                    </div>
                    <div className='dlab-info p-a15 border-1'>
                      <h4 className='dlab-title m-t0'>
                        <a href='booking-details.html'>{item.title}</a>
                      </h4>
                      <span className='location'>{item.subtitle}</span>
                      <div className='package-content'>
                        <ul className='package-meta'>
                          <li>
                            <span className='fa fa-calendar'></span> No of Days:{' '}
                            {item.days}{' '}
                          </li>
                          <li>
                            {' '}
                            <span className='fa fa-user'></span> People:{' '}
                            {item.people}{' '}
                          </li>
                        </ul>
                        <div className='clearfix'>
                          <span className='package-price pull-center text-primary'>
                            ${item.price}
                          </span>
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
export default Products;
