import React from "react";
import { Link, Redirect } from 'react-router-dom';

import SignInForm from "./SignInForm";

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
                          <h4 className="mb-4">Welcome Back!</h4>
                          <p className="mb-4">Lets begin our journey from where we left it last time.</p>
                        </div>
                        <SignInForm />
                        <div className="text-center mt-3">
                          Not an user yet? <Link to="/sign-up">Create an Account!</Link>
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