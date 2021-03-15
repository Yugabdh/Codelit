import React from "react";
import { connect } from "react-redux";

import profileImage from "../assets/img/png/logo.png";
class HomePage extends React.Component {

  render() {
    const { user } = this.props;
    return (
      <section className="spad-3 homepage backgroud-dark-0">
        <div className="container-fluid">
          <h3 className="text-white mb-2">Profile</h3>
          <div className="row mb-3">
            <div className="col-lg-4">
              <div className="card mb-3 backgroud-dark-2">
                <div className="card-body text-center shadow">
                  <img className="rounded-circle mb-3 mt-4" alt="userImage" src= {user.photoURL} width="160" height="160" />
                  <p className="text-white"><strong>{user.displayName}</strong></p>
                  <div className="mb-3"></div>
                </div>
              </div>
              <div className="card shadow mb-4 backgroud-dark-1">
                <div className="card-header py-3">
                  <h6 className="text-primary font-weight-bold m-0">Courses</h6>
                </div>
                <div className="card-body backgroud-dark-2">
                  <h4 className="small font-weight-bold text-white">
                    Account setup <span className="float-right">Complete!</span>
                  </h4>
                  <div className="progress progress-sm mt-1 mb-3">
                    <div className="progress-bar bg-success w-100" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                      <span className="sr-only">100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className="col-lg-8">
                <div className="row mb-3">
                  <div className="col">
                    <div className="card text-white bg-primary shadow">
                      <div className="card-body">
                        <div className="row mb-2">
                          <div className="col">
                            <p className="m-0">Peformance</p>
                            <p className="m-0"><strong>65.2%</strong></p>
                          </div>
                          <div className="col-auto"><i className="fa fa-rocket fa-2x"></i></div>
                        </div>
                        <p className="text-white-50 small m-0"><i className="fas fa-arrow-up"></i> 5% since last month</p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card text-white bg-success shadow">
                      <div className="card-body  backgroud-dark-3">
                        <div className="row mb-2">
                          <div className="col">
                            <p className="m-0">Peformance</p>
                            <p className="m-0"><strong>65.2%</strong></p>
                          </div>
                          <div className="col-auto"><i className="fa fa-rocket fa-2x"></i></div>
                        </div>
                        <p className="text-white-50 small m-0"><i className="fas fa-arrow-up"></i> 5% since last month</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="card shadow mb-3 backgroud-dark-1">
                      <div className="card-header py-3">
                        <p className="text-primary m-0 font-weight-bold">User Settings</p>
                      </div>
                      <div className="card-body text-white">
                        <form className="custom-form">
                          <div className="form-row">
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="username"><strong>Username</strong></label>
                                <input className="form-control" type="text" id="displayName" 
                                       placeholder={user.displayName} name="displayName"/></div>
                            </div>
                            <div className="col"></div>
                          </div>
                          <div className="form-row">
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="first_name"><strong>First Name</strong></label>
                                <input className="form-control" type="text" id="first_name" 
                                       placeholder="John" name="first_name" />
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="last_name"><strong>Last Name</strong></label>
                                <input className="form-control" type="text" id="last_name" placeholder="Doe" name="last_name" />
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <button className="btn btn-custom btn-sm text-white" type="submit">
                              Save Settings
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="card shadow backgroud-dark-1">
                      <div className="card-header py-3">
                          <p className="text-primary m-0 font-weight-bold">Contact Settings</p>
                      </div>
                      <div className="card-body text-white">
                        <form className="custom-form">
                          <div className="form-group"><label htmlFor="address"><strong>Address</strong></label><input className="form-control" type="text" id="address" placeholder="Sunset Blvd, 38" name="address" /></div>
                          <div className="form-row">
                            <div className="col">
                              <div className="form-group"><label htmlFor="city"><strong>City</strong></label><input className="form-control" type="text" id="city" placeholder="Los Angeles" name="city" /></div>
                            </div>
                            <div className="col">
                              <div className="form-group"><label htmlFor="country"><strong>Country</strong></label><input className="form-control" type="text" id="country" placeholder="USA" name="country" /></div>
                            </div>
                          </div>
                          <div className="form-group"><button className="btn btn-custom btn-sm " type="submit">Save Settings</button></div>
                        </form>
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

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}
export default connect(mapStateToProps)(HomePage);