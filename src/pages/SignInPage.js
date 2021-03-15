import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../actions";
import { Link } from 'react-router-dom';

class SignInPage extends React.Component {
  state = { email: "", password: "" };

  handleEmailChange = ({ target }) => {
    this.setState({ email: target.value });
  };

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value });
  };

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;

    dispatch(loginUser(email, password));
  };


  render() {
    const { loginError, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/home" />;
    } else {
      return (
        <section className="spad-3 signform backgroud-gradient">
          <div className="container holder">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-12 col-xl-10">
                <div className="card shadow-lg o-hidden border-0 my-5">
                  <div className="card-body p-0">
                    <div className="row no-gutters">
                      <div className="col-lg-6 d-none d-lg-flex">
                        <div className="flex-grow-1 bg-register-image"></div>
                      </div>
                      <div className="col-lg-6">
                        <div className="p-5 form-container">
                          <div className="text-center">
                            <h4 className="mb-4">Welcome Back!</h4>
                          </div>
                          <form className="user">
                            <div className="form-group">
                              <input className="form-control form-control-user" type="email" id="email"
                                     aria-describedby="emailHelp" placeholder="Enter Email Address..." 
                                     name="email" onChange={ this.handleEmailChange } />
                            </div>
                            <div className="form-group">
                              <input className="form-control form-control-user" type="password" id="password" 
                                     placeholder="Password" name="password" onChange={ this.handlePasswordChange } />
                            </div>
                            { 
                            loginError && (
                              <p className="text-danger">
                                Incorrect email or password.
                              </p>
                            )
                            }
                            <button className="btn btn-custom btn-block text-white btn-user" 
                                    type="button"
                                    onClick={ this.handleSubmit }
                            >
                              Login
                            </button>
                            <hr />
                            <button className="btn btn-block text-white btn-user bg-danger"> <i className="fa fa-google"></i> Sign-in with Google</button>
                            <hr />
                          </form>
                          <div className="text-center">
                            <Link className="small" to="/forget-password">Forgot Password?</Link>
                          </div>
                          <div className="text-center">
                            <Link className="small" to="/sign-up">Create an Account!</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default (connect(mapStateToProps)(SignInPage));