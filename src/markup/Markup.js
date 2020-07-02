import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Header from './Layout/Header';
// import Footer from './Layout/Footer';
import Homepage from "./Pages/Homepage";
// import Homepage2 from './Pages/Homepage2';
import About from "./Pages/About";

import BookingDetailsFairyMeadows from "./Pages/BookingDetailsFairyMeadows";
import BookingDetailsSkardu from "./Pages/BookingDetailsSakardu";
import BookingDetailsHunza from "./Pages/BookingDetailsHunza";
import BookingDetailsMalamJabba from "./Pages/BookingDetailsMalamJabba";

import BookingDetailsThandiani from "./Pages/BookingDetailsThandiani";
import BookingDetailsMushkpuriTop from "./Pages/BookingDetailsMushkpuri";

import Place from "./Pages/Place";
import Packages from "./Pages/Packages";
import Error404 from "./Pages/Error";
import Login from "./Pages/Login2";

import Register2 from "./Pages/Register2";
import ForgotPass from "./Pages/ForgotPass";
import BlogClassic from "./Pages/BlogClassic";

import Contacts from "./Pages/Contacts";

import Products from "./Pages/Products";

class Markup extends Component {
  render() {
    return (
      <BrowserRouter basename="/HighOnTour">
        <div className="page-wraper">
          <Switch>
            <Route path="/" exact component={Homepage} />
            {/* <Route path='/index-2' exact component={Homepage2} /> */}
            <Route path="/about" exact component={About} />

            <Route
              path="/FairyMeadows"
              exact
              component={BookingDetailsFairyMeadows}
            />
            <Route path="/Skardu" exact component={BookingDetailsSkardu} />
            <Route path="/Hunza" exact component={BookingDetailsHunza} />
            <Route
              path="/MalamJabba"
              exact
              component={BookingDetailsMalamJabba}
            />
            <Route
              path="/Thandiani"
              exact
              component={BookingDetailsThandiani}
            />
            <Route
              path="/MushkpuriTop"
              exact
              component={BookingDetailsMushkpuriTop}
            />
            <Route path="/place" exact component={Place} />
            <Route path="/packages" exact component={Packages} />
            <Route path="/error" exact component={Error404} />

            <Route path="/login" exact component={Login} />
            <Route path="/register2" exact component={Register2} />
            <Route path="/forgot" exact component={ForgotPass} />

            <Route path="/experience" exact component={BlogClassic} />
            <Route path="/products" exact component={Products} />

            {/* <Route path='/portfolio2' exact component={PortfolioGrid2} /> */}
            <Route path="/contact" exact component={Contacts} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Markup;
