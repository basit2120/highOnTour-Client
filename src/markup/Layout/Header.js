import React, { Component } from "react";
import { Link } from "react-router-dom";

// import {} from 'react-router-dom'
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";
class Header extends Component {
  componentDidMount() {
    // sidebar open/close

    var btn = document.querySelector(".navicon");
    var aaa = document.querySelector(".myNavbar ");

    function toggleFunc() {
      return aaa.classList.toggle("show");
    }

    btn.addEventListener("click", toggleFunc);

    // Sidenav li open close
    var navUl = [].slice.call(document.querySelectorAll(".navbar-nav > li"));
    for (var y = 0; y < navUl.length; y++) {
      navUl[y].addEventListener("click", function () {
        checkLi(this);
      });
    }

    function checkLi(current) {
      navUl.forEach((el) => el.classList.remove("open"));
      current.classList.add("open");
    }
  }
  render() {
    return (
      <header className="site-header mo-left header">
        <div className="top-bar bg-dark">
          {
            <div className="container">
              <div className="row d-flex justify-content-between">
                <div className="dlab-topbar-left">
                  {/* <ul>
                  <li>
                    <Link to={'hotel'} className='site-button-link'>
                    
                    </Link>
                  </li>
                  <li>
                    <Link className='site-button-link' to={'place'}>
                      
                    </Link>
                  </li>
                  <li>
                    <Link className='site-button-link' to={'packages'}>
                      
                    </Link>
                  </li>
                  <li>
                    <Link className='site-button-link' to={'products'}>
                      
                    </Link>
                  </li>
                </ul> */}
                </div>
                <div className="dlab-topbar-right top-login">
                  {!this.props.isAuthenticated ? (
                    <ul>
                      <li>
                        <Link to={"/login"} className="site-button-link">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to={"/register2"} className="site-button-link">
                          Sign Up
                        </Link>
                      </li>
                    </ul>
                  ) : this.props.data.user &&
                    this.props.data.user.first_name &&
                    this.props.data.user.last_name ? (
                    <ul>
                      <li>
                        {this.props.data.user.first_name}{" "}
                        {this.props.data.user.last_name}
                      </li>
                      <li>
                        <Link
                          to={"/"}
                          className="site-button-link"
                          onClick={() => {
                            this.props.logout();
                          }}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    "High On Tour"
                  )}
                </div>
              </div>
            </div>
          }
        </div>
        <div className="sticky-header navbar-expand-lg">
          <div className="main-bar clearfix onepage">
            <div className="container clearfix">
              <div className="logo-header mostion">
                <Link to={"./"}>
                  <img src={require("./../../images/MainLogo.png")} alt="" />
                </Link>
              </div>
              <button
                className="navbar-toggler collapsed navicon justify-content-end"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div
                className="header-nav navbar-collapse collapse navbar myNavbar justify-content-end"
                id="navbarNavDropdown"
              >
                <ul className="nav navbar-nav">
                  <li>
                    <Link to={""}>
                      Home
                      {/* <i class='fa fa-chevron-down'></i> */}
                    </Link>
                    {/* <ul class="sub-menu">
                                            <li><Link to={'./'} class="dez-page">Home 1</Link></li>
                                            <li><Link to={'index-2'} class="dez-page">Home 2 <span class="new-page menu-new">New</span></Link></li>
                                        </ul> */}
                  </li>
                  {/* <li>
                    <Link to={''}>
                      {' '}
                      Pages <i className='fa fa-chevron-down'></i>
                    </Link>
                    <ul className='sub-menu'>
                      <li>
                        <Link to={'./about'} className='dez-page'>
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to={'./listing'} className='dez-page'>
                          Listing <span class='new-page menu-new'>New</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={'./hotel'}>Hotels</Link>
                      </li>
                      <li>
                        <Link to={'./booking'}>Booking Details</Link>
                      </li>
                      <li>
                        <Link to={'./place'}>Places</Link>
                      </li>
                      <li>
                        <Link to={'./packages'}>Packages</Link>
                      </li>
                      <li>
                        <Link to={'./error'} className='dez-page'>
                          Error 404
                        </Link>
                      </li>
                      <li>
                        <Link to={'./login'} className='dez-page'>
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link to={'./register'} className='dez-page'>
                          Register
                        </Link>
                      </li>
                      <li>
                        <Link to={'./register2'} className='dez-page'>
                          Register <span class='new-page menu-new'>New</span>
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  <li>
                    <Link to={"place"} className="dez-page">
                      Destinations
                    </Link>
                  </li>
                  <li>
                    <Link to={"experience"} className="dez-page">
                      Experiences
                    </Link>
                  </li>
                  {/* <li>
                    <Link>
                    Experiences <i className='fa fa-chevron-down'></i>
                    </Link>
                    <ul className='sub-menu'>
                      <li>
                        <Link to={'blogclassic'} className='dez-page'>
                          Classic
                        </Link>
                      </li>
                      <li>
                        <Link to={'blogclassicsidebar'} className='dez-page'>
                          Classic Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to={'bloggrid'} className='dez-page'>
                          Detailed Grid
                        </Link>
                      </li>
                      <li>
                        <Link to={'bloggridsidebar'} className='dez-page'>
                          Detailed Grid Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to={'blogleftsidebar'} className='dez-page'>
                          Left Image Sidebar
                        </Link>
                      </li>
                      <li>
                        <Link to={'blogdetails'} className='dez-page'>
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <Link to={"Products"} className="dez-page">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to={"About"} className="dez-page">
                      About Us
                      {/* <i className='fa fa-chevron-down'></i> */}
                    </Link>
                    {/* <ul className='sub-menu'>
                      <li>
                        <Link to={'About'} className='dez-page'>
                          History & Vision{' '}
                        </Link>
                      </li> */}
                    {/* <li>
                        <Link to={'portfolio2'} className='dez-page'>
                          Team Players
                        </Link>
                      </li> */}
                    {/* <li><Link to={'portfolio2'} className="dez-page">Portfolio Grid 4 </Link></li> */}
                    {/* </ul> */}
                  </li>
                  <li>
                    <Link to={"contact"} className="dez-page">
                      Contact Us
                    </Link>
                  </li>
                  {/* <li>
                    <Link to={'/login'} className='site-button-link'>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to={'/register2'} className='site-button-link'>
                      Sign Up
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    data: state.authReducer.data,
    error: state.authReducer.error,
    isAuthenticated: state.authReducer.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
