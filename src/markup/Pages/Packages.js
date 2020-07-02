import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header2 from './../Layout/Header';
import Footer from './../Layout/Footer';

const packageContent = [
  {
    image: require('./../../images/gallery/img5.jpg'),
    title: 'Weekdays in Sakardu',
    subtitle: 'Khyber Pakhtunkhwa, Pakistan',
    days: 7,
    people: 20,
    price: '18,500',
    link: '/Skardu',
  },
  // {
  //   image: require('./../../images/gallery/img6.jpg'),
  //   title: 'Weekdays in Kashmir',
  //   subtitle: 'Azad Kashmir, Pakistan',
  //   days: 7,
  //   people: 20,
  //   price: 3000,
  // },
  {
    image: require('./../../images/gallery/img7.jpg'),
    title: 'Weekdays in Fairy Meadows',
    subtitle: 'North, Pakistan',
    days: 7,
    people: 20,
    price: '15,500',
    link: '/FairyMeadows',
  },
  {
    image: require('./../../images/gallery/img8.jpg'),
    title: '5 Days in Hunza',
    subtitle: 'North, Pakistan',
    days: 5,
    people: 20,
    price: '16,500',
    link: '/Hunza',
  },
  {
    image: require('./../../images/gallery/img9.jpg'),
    title: '3 Days in Sawat Kalam & Malam Juba',
    subtitle: 'North, Pakistan',
    days: 3,
    people: 20,
    price: '8,500',
    link: '/MalamJabba',
  },
  {
    image: require('./../../images/gallery/img2.jpg'),
    title: '2 Days in Thandiani and Miranjani',
    subtitle: 'North, Pakistan',
    days: 2,
    people: 20,
    price: '5,500.00',
    link: '/Thandiani',
  },
  {
    image: require('./../../images/gallery/img3.jpg'),
    title: '1 Day in Muskpuri Top',
    subtitle: 'North, Pakistan',
    days: 7,
    people: 20,
    price: '3,000.00',
    link: '/MushkpuriTop',
  },
];

var bg3 = require('./../../images/banner/bnr1.jpg');
class Packages extends Component {
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
              <h1 className='text-white'>Packages</h1>
              <div className='breadcrumb-row'>
                <ul className='list-inline'>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>Packages</li>
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
                          <span className='package-price pull-left text-primary'>
                            Rs.{item.price}
                          </span>
                          <Link
                            to={item.link}
                            className='site-button pull-right'
                          >
                            View details
                          </Link>
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
export default Packages;
