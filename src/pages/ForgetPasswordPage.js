import React from "react";
import { Link } from 'react-router-dom';

function ForgetPasswordPage() {
  return(
    <section className="spad-3 signform backgroud-gradient" style={{ height: 100 +"vh" }}>
      <div className="container holder">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-12 col-xl-10">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="p-5 form-container">
                      <div className="text-center">
                        <h4 className="mb-2">Forgot Your Password?</h4>
                        <p className="mb-4">We get it, stuff happens. Just enter your email address below and we&#39;ll send you a link to reset your password!</p>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="email" aria-describedby="emailHelp" placeholder="Enter Email Address..." name="email" />
                        </div>
                        <button className="btn btn-custom btn-block text-white btn-user" type="submit">Reset Password</button>
                      </form>
                      <div className="text-center">
                        <hr />
                        <Link className="small" to="/sign-up">Create an Account!</Link>
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
        </div>
      </div>
    </section>
  );
}

export default ForgetPasswordPage;