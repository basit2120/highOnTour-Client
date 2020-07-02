import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slick3 from "./../Pages/Slick3";
import { connect } from "react-redux";
import { registerUser } from "../../store/actions/auth";
class Register2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      errro: false,
      loading: false,
      email: "",
      password: "",
      first: "",
      last: "",
      confirm_pass: "",
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
    if (this.state.password !== this.state.confirm_pass) {
      alert("Password & Confirm Password must equal");
    } else {
      var user = {
        email: this.state.email,
        password: this.state.password,
        first_name: this.state.first,
        last_name: this.state.last,
        phone_number: "123",
      };
      this.props.registerUser(user);
    }
    // this.props.loginUser(this.state.email, this.state.password);
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
                  <div id="register" class="tab-pane">
                    <form class="dlab-form">
                      <div class="form-head">
                        <h3 class="form-title m-t0">
                          Create an account! It's free and
                          <span class="text-primary"> always will be.</span>
                        </h3>
                        <p class="title-text">
                          Welcome back, please login
                          <br /> to your account
                        </p>
                      </div>
                      <div class="form-group-bx">
                        <div class="form-group input-form">
                          <label>First Name</label>
                          <input
                            name="fdzName"
                            required=""
                            class="form-control"
                            placeholder="Dummy Name"
                            type="text"
                            value={this.state.first}
                            onChange={(e) => this.handleChange(e, "first")}
                          />
                        </div>
                        <div class="form-group input-form">
                          <label>Last Name</label>
                          <input
                            name="ldzName"
                            class="form-control"
                            placeholder="Dummy Name"
                            type="text"
                            value={this.state.last}
                            onChange={(e) => this.handleChange(e, "last")}
                          />
                        </div>
                        <div class="form-group input-form">
                          <label>Email Id</label>
                          <input
                            name="dzName"
                            class="form-control"
                            placeholder="info123@example.com"
                            type="text"
                            value={this.state.email}
                            onChange={(e) => this.handleChange(e, "email")}
                          />
                        </div>
                        <div class="form-group input-form">
                          <label>Password</label>
                          <input
                            name="dzName"
                            required=""
                            class="form-control"
                            placeholder="Password"
                            type="password"
                            value={this.state.password}
                            onChange={(e) => this.handleChange(e, "password")}
                          />
                        </div>
                        <div class="form-group input-form">
                          <label>Confirm Password</label>
                          <input
                            name="dzName"
                            required=""
                            class="form-control"
                            placeholder="Password"
                            type="password"
                            value={this.state.confirm_pass}
                            onChange={(e) =>
                              this.handleChange(e, "confirm_pass")
                            }
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <input type="checkbox" id="privacy-policy" />
                        <label for="privacy-policy">
                          I agree to the{" "}
                          <Link to={""} class="btn-link">
                            Terms of Service{" "}
                          </Link>
                          &{" "}
                          <Link to={""} class="btn-link">
                            Privacy Policy{" "}
                          </Link>
                        </label>
                      </div>
                      <div class="form-group">
                        <Link
                          class="site-button black m-r10"
                          onClick={this.handleSubmit}
                          to={"./register2"}
                          class="site-button black m-r10"
                        >
                          Submit
                        </Link>
                        <Link to={"./login"} class="site-button outline">
                          Login
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
    registerUser: (user) => dispatch(registerUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register2);
