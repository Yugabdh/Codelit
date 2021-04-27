import { Link } from 'react-router-dom';
import { useState } from "react";

import { useDispatch } from 'react-redux';

import { signinEmailPassword } from "../../redux/actions/auth"
import { useHistory } from "react-router-dom";

function SignInForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');

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
        <label for="password">Password <span><Link to="/forget-password">Forgot Password?</Link></span></label>
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

      <hr />
      <button
        className="btn btn-primary btn-block" 
        type="submit"
      >
        Login
      </button>
      <button className="btn btn-block btn-danger">
        <i className="fa fa-google"></i> Sign-in with Google
      </button>
    </form>
  )
}

export default SignInForm;