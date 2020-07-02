import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const places = [
  {
    price: 1200,
    image: require('./../../images/Topplaces/Abbottabad.jpg'),
    title: 'Thandiani',
    description:
      'We invite you to experience here with your family, definitely you are filled with lasting memories and feel awesome.',
    link: 'Thandiani',
  },
  {
    price: 1200,
    image: require('./../../images/Topplaces/mushkpuritop.jpg'),
    title: 'MushkpuriTop',
    description:
      'We invite you to experience here with your family, definitely you are filled with lasting memories and feel awesome.',
    link: 'MushkpuriTop',
  },
  {
    price: 1200,
    image: require('./../../images/Topplaces/FairyMeadows.jpg'),
    title: 'Fairy Meadows',
    description:
      'We invite you to experience here with your family, definitely you are filled with lasting memories and feel awesome.',
    link: 'FairyMeadows',
  },
  {
    price: 1200,
    image: require('./../../images/Topplaces/mushkpuritop.jpg'),
    title: 'Hunza',
    description:
      'We invite you to experience here with your family, definitely you are filled with lasting memories and feel awesome.',
    link: 'Hunza',
  },
  {
    price: 1200,
    image: require('./../../images/Topplaces/MalumJuba.jpg'),
    title: 'MalamJabba',
    description:
      'We invite you to experience here with your family, definitely you are filled with lasting memories and feel awesome.',
    link: 'MalamJabba',
  },
  {
    price: 1200,
    image: require('./../../images/Topplaces/MalumJuba.jpg'),
    title: 'Skardu',
    description:
      'We invite you to experience here with your family, definitely you are filled with lasting memories and feel awesome.',
    link: 'Skardu',
  },
];

class TopPlaces extends Component {
  render() {
    return (
      <div
        className='section-full bg-white content-inner dlab-about-1 promotions'
        id='about-us'
      >
        <div className='container'>
          <div className='section-head text-center'>
            <h2 className='text-uppercase m-b0'>TOP PLACES</h2>
            <p className='font-18'>BEST TRAVEL PACKAGES AVAILABLE</p>
          </div>
          <div className='row d-flex'>
            <div className='col-md-8 col-sm-8 col-lg-9 form-group align-self-center text-left'>
              <button className='site-button m-b5 mr-1'>Naran</button>
              <button className='site-button m-b5 mr-1'>Kaghan</button>
              <button className='site-button m-b5 mr-1'>Mushkpuri</button>
              <button className='site-button m-b5 mr-1'>Babusar Top</button>
              <button className='site-button m-b5 mr-1'>Fairy Meadows</button>
              <button className='site-button m-b5 mr-1'>Kalam</button>
              <button className='site-button m-b5 mr-1'>Neelam</button>
              <button className='site-button m-b5 mr-1'>Sakardu</button>
            </div>
            <div className='col-md-4 col-sm-4 col-lg-3 form-group'>
              <select className='form-control'>
                <option>Relevent</option>
                <option>High to Low</option>
                <option>Low to High</option>
              </select>
            </div>
          </div>
          <div className='row' id='masonry'>
            {places.map((item, index) => (
              <div
                className='col-lg-4 col-md-6 col-sm-6 m-b30 card-container'
                key={index}
              >
                <div className='dlab-box'>
                  <div className='dlab-media'>
                    <Link to={'./' + item.link + ''}>
                      <img src={item.image} alt='' />
                    </Link>
                    <div className='tr-price'>
                      <span>{item.price} PKR</span>
                    </div>
                  </div>
                  <div className='dlab-info p-a20 border-1 text-center'>
                    <h4 className='dlab-title m-t0'>
                      <Link to={'./' + item.link + ''}>{item.title}</Link>
                    </h4>
                    <p>{item.description}</p>

                    <div className='tr-btn-info'>
                      <Link
                        to={'./' + item.link + ''}
                        className='site-button radius-no'
                      >
                        <i
                          className='fa fa-location-arrow'
                          aria-hidden='true'
                        ></i>{' '}
                        Lets Go
                      </Link>
                      <Link
                        to={'./' + item.link + ''}
                        className='site-button bg-primary-dark radius-no'
                      >
                        <i className='fa fa-info-circle' aria-hidden='true'></i>{' '}
                        Details{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default TopPlaces;
