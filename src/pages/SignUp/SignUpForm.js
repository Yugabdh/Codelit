import { useState } from "react";

import { useDispatch } from 'react-redux';

import { signinEmailPassword } from "../../redux/actions/auth"
import { useHistory } from "react-router-dom";

function SignInForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ email, setEmail] = useState('');
  const [ fname, setFname] = useState('');
  const [ lname, setLname] = useState('');
  const [ password, setPassword] = useState('');
  const [ repassword, setRepassword] = useState('');

  const handleSubmit = (event) => {
    if(event){
      event.preventDefault();
    }
    dispatch(signinEmailPassword(email, password, () => history.push("/home")));
    setEmail('');
    setPassword('');
  }

  return (
    <form className="custom-form" onSubmit={e => handleSubmit(e)}>
      <div className="form-group">
        <div className="row">
          <div className="col-md-6 col-sm-12 pb-4">
            <label for="fname">First name</label>
            <input 
              className="form-control form-control-user"
              type="text" id="fname"
              aria-describedby="fnameHelp"
              placeholder="First name"
              name="fname"
              value={ fname }
              onChange={ (e) => setFname(e.target.value) }
            />
          </div>
          <div className="col-md-6 col-sm-12 pb-4">
            <label for="lname">Last name</label>
            <input 
              className="form-control form-control-user"
              type="text" id="lname"
              aria-describedby="lnameHelp"
              placeholder="Last name"
              name="lname"
              value={ lname }
              onChange={ (e) => setLname(e.target.value) }
            />
          </div>
        </div>
        <label for="email">Email Address</label>
        <input 
          className="form-control form-control-user"
          type="email" id="email"
          aria-describedby="emailHelp"
          placeholder="Enter Email Address..."
          name="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input
          className="form-control form-control-user" 
          type="password"
          id="password" 
          placeholder="Password"
          name="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
      </div>
      <div className="form-group">
        <label for="repassword">Re-enter password</label>
        <input
          className="form-control form-control-user" 
          type="password"
          id="repassword" 
          placeholder="Re-enter password"
          name="repassword"
          value={ repassword }
          onChange={ (e) => setRepassword(e.target.value) }
        />
      </div>

      <hr />
      <button
        className="btn btn-primary btn-block" 
        type="submit"
      >
        Create account
      </button>
      <button className="btn btn-block btn-danger">
        <i className="fa fa-google"></i> Sign-up with Google
      </button>
    </form>
  )
}

export default SignInForm;