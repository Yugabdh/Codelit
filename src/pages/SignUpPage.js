import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom';

import { signUpUser, signUpUserGoogle } from "../actions";
class SignUpPage extends React.Component {
  constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handelGoogleSubmit = this.handelGoogleSubmit.bind(this);
  }
  

  handleInputChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){  
        const { dispatch } = this.props;
        const { email, password, firstname, lastname } = this.state.input;
        console.log(email, password, firstname, lastname);
        dispatch(signUpUser(email, password, firstname, lastname));
    }
  }

  handelGoogleSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(signUpUserGoogle());
  }

  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["firstname"]) {
      isValid = false;
      errors["firstname"] = "Please enter your first-name.";
    }

    if (!input["lastname"]) {
      isValid = false;
      errors["lastname"] = "Please enter your last-name.";
    }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (typeof input["password"] !== "undefined") {
      if (input["password"].length <= 7) {
        isValid = false;
        errors["password"] = "Password should be at least be 8 character long.";
      }
    }

    if (!input["password_repeat"]) {
      isValid = false;
      errors["password_repeat"] = "Please enter your password.";
    }

    if (typeof input["password_repeat"] !== "undefined") {
      if (input["password"] !== input["password_repeat"]) {
        isValid = false;
        errors["password_repeat"] = "Password should be same.";
      }
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }

  render() {
    const { signUpError, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/home" />;
    } else {
      return (
        <section className="spad-3 signform backgroud-gradient">
          <div className="container holder">
            <div className="card shadow-lg o-hidden border-0 my-1">
              <div className="card-body p-0">
                <div className="row no-gutters">
                  <div className="col-lg-5 d-none d-lg-flex">
                    <div className="flex-grow-1 bg-register-image"></div>
                  </div>
                  <div className="col-lg-7">
                    <div className="p-5 form-container">
                      <div className="text-center">
                        <h4 className="mb-4">Create an Account!</h4>
                      </div>
                      <form className="user" onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <input className="form-control form-control-user" 
                                  type="text" id="firstname" 
                                  placeholder="First Name" name="firstname"
                                  value={this.state.input.firstname}
                                  onChange={this.handleInputChange} required/>
                            <div className="text-danger">{this.state.errors.firstname}</div>
                          </div>
                          <div className="col-sm-6">
                            <input className="form-control form-control-user" 
                                  type="text" id="lastname" 
                                  placeholder="Last Name" name="lastname"
                                  value={this.state.input.lastname}
                                  onChange={this.handleInputChange} required/>
                                  <div className="text-danger">{this.state.errors.lastname}</div>
                          </div>
                        </div>

                        <div className="form-group">
                          <input className="form-control form-control-user" 
                                type="email" id="email" aria-describedby="emailHelp" 
                                placeholder="Email Address" name="email"
                                value={this.state.input.email}
                                onChange={this.handleInputChange} required/>
                                <div className="text-danger">{this.state.errors.email}</div>
                        </div>

                        <div className="form-group row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <input className="form-control form-control-user"
                                  type="password" id="password" placeholder="Password"
                                  name="password"
                                  value={this.state.input.password}
                                  onChange={this.handleInputChange} required/>
                                  <div className="text-danger">{this.state.errors.password}</div>
                          </div>
                          <div className="col-sm-6">
                            <input className="form-control form-control-user"
                                  type="password" id="password_repeat"
                                  placeholder="Repeat Password" name="password_repeat"
                                  value={this.state.input.password_repeat}
                                  onChange={this.handleInputChange} required/>
                                  <div className="text-danger">{this.state.errors.password_repeat}</div>
                          </div>
                        </div>

                        { 
                          signUpError && (
                            <p className="text-danger">
                              Sign-up Error.
                            </p>
                          )
                        }

                        <button className="btn btn-custom btn-block text-white btn-user" type="submit">Register Account</button>
                        <hr />
                        <button className="btn btn-block text-white btn-user bg-danger" type="button" onClick={this.handelGoogleSubmit}> <i className="fa fa-google"></i> Sign-in with Google</button>
                      </form>

                      <div className="text-center">
                        <Link className="small" to="/forget-password">Forgot Password?</Link>
                      </div>
                      <div className="text-center">
                        <Link className="small" to="/sign-in">Already have an account? Login!</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isSigningup: state.auth.isSigningup,
    signUpError: state.auth.signUpError,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default (connect(mapStateToProps)(SignUpPage));