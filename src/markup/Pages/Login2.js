import React, { Component } from "react";
// import Slider from "react-slick";
import { Link } from "react-router-dom";
import Slick3 from "./Slick3";
import { connect } from "react-redux";
import { loginUser } from "../../store/actions/auth";
class Login2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      errro: false,
      loading: false,
      email: "",
      password: "",
    };
  }
  componentDidUpdate(prevProps, nextProps) {
    console.log(prevProps, nextProps);
    if (prevProps.loading !== this.props.loading) {
      console.log("loading");
      this.setState({ loading: true });
    }
    if (
      prevProps.error !== this.props.error &&
      this.props.error &&
      this.props.error.status === 404
    ) {
      console.log("error", prevProps.error);
      alert(this.props.error.message);
    }
    if (
      prevProps.data !== this.props.data &&
      this.props.data &&
      this.props.data.status === 200
    ) {
      console.log("data", prevProps.data);
      this.props.history.push("/");
    }
  }
  handleChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  };
  handleSubmit = () => {
    this.props.loginUser(this.state.email, this.state.password);
    // console.log(this.state.email, this.state.password);
  };
  render() {
    return (
      <div>
        <div class="page-content dlab-login font-roboto">
          <div class="container-fluid p-lr0">
            <div class="row m-lr0 login-form-box">
              <div class="col-lg-4 p-lr0">
                <div class="login-form">
                  <div class="logo logo-header">
                    <Link to={"./"}>
                      <img
                        src={require("./../../images/MainLogo.png")}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div id="login" class="tab-pane">
                    <form class="dlab-form">
                      <div class="form-head">
                        <h3 class="form-title m-t0">
                          We Are <span class="text-primary">High On Tour</span>
                        </h3>
                        <p class="title-text">
                          Welcome back, please login
                          <br /> to your account
                        </p>
                      </div>
                      <div class="form-group-bx">
                        <div class="form-group input-form">
                          <label>Email Address</label>
                          <input
                            name="dzName"
                            required=""
                            className="form-control"
                            placeholder="Your Email Id"
                            value={this.state.email}
                            onChange={(e) => this.handleChange(e, "email")}
                          />
                        </div>
                        <div class="form-group input-form">
                          <label>Password</label>
                          <input
                            name="dzName"
                            required=""
                            className="form-control "
                            placeholder="Type Password"
                            type="password"
                            value={this.state.password}
                            onChange={(e) => this.handleChange(e, "password")}
                          />
                        </div>
                      </div>
                      <div class="form-group field-btn text-left">
                        <div class="input-block">
                          <input id="check1" type="checkbox" />
                          <label for="check1">Remember me</label>
                        </div>
                        <Link to={"./forgot"} class="btn-link forgot-password">
                          {" "}
                          Forgot Password
                        </Link>
                      </div>
                      <div>
                        <Link
                          class="site-button black m-r10"
                          onClick={this.handleSubmit}
                          to={"./login"}
                        >
                          Login
                        </Link>
                        <Link to={"./register2"} class="site-button outline">
                          Sign Up
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 p-lr0">
                <Slick3 />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.authReducer.loading,
    data: state.authReducer.data,
    error: state.authReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, password) => dispatch(loginUser(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login2);
