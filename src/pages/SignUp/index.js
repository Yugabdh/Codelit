import React from "react";
import { Link, Redirect } from 'react-router-dom';

import SignUpForm from "./SignUpForm";

import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";

function SignUpPage() {
  const auth = useSelector(state => state.firebase.auth);
  
  if(isLoaded(auth) && !isEmpty(auth)) {
    return <Redirect to="/home" />;
  } else {
    return (
      <section className="spad-3">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-7 col-xl-7">
              <div className="card o-hidden sign-card backgroud-dark-2">
                <div className="card-body p-1 p-sm-4">
                  <div className="row no-gutters">
                    <div className="col-lg-12">
                      <div className="form-container">
                        <div className="text-center">
                          <h4 className="mb-4">Hello World!</h4>
                          <p className="mb-4">Lets begin our never-ending journey.</p>
                        </div>
                        <SignUpForm />
                        <div className="text-center mt-3">
                          You already have account? <Link to="/sign-in">Login here</Link>
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
}

export default SignUpPage;