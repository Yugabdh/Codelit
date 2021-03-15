import firebase from 'firebase';

import { myFirebase, db, provider } from "../firebase/firebase-init";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

// Sign In
const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const receiveLogin = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

const loginError = () => {
  return {
    type: LOGIN_FAILURE
  };
};

// Sign Out
const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

const logoutError = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

// Sign Up
const requestSignUp = () => {
  return {
    type: SIGNUP_REQUEST
  }
}

const receiveSignUp = () => {
  return {
    type: SIGNUP_SUCCESS
  }
}

const signUpError = () => {
  return {
    type: SIGNUP_FAILURE
  }
}

// Verify Auth
const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  };
};

export const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin());
  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(loginError());
    });
};

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(logoutError());
    });
};

export const signUpUser = (email, password, firstname, lastname) => dispatch => {
  dispatch(requestSignUp());
  myFirebase
    .auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log("sucess");
      var userInfo = {
        uid: user.uid,
        email: user.email,
        firstname: firstname,
        lastname: lastname,
        displayName: firstname + " " + lastname,
        photoUrl: ""
      }
      db.collection("users").doc().set(userInfo)
        .then((user) => {
          dispatch(receiveLogin(user));
        })
        .catch(error => {
          //Do something with the error if you want!
          console.log(error);
          dispatch(signUpError());
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      dispatch(signUpError());
      // ..
    });
}

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const signUpUserGoogle = () => dispatch => {
  myFirebase
    .auth().signInWithPopup(googleAuthProvider)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      var docRef = db.collection("users").doc(user.uid);

      docRef.get().then((doc) => {
          if (doc.exists) {
            dispatch(receiveLogin(doc));
          } else {
            var userInfo = {
              email: user.email,
              firstname: "",
              lastname: "",
              displayName: user.displayName,
              photoUrl: user.photoURL
            }
            db.collection("users").doc(user.uid).set(userInfo)
              .then((user) => {
                dispatch(receiveLogin(user));
              })
              .catch(error => {
                //Do something with the error if you want!
                console.log(error);
              });
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
    })
    .catch((error) => {
      console.log(error.message)
    })
}

export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest());
  myFirebase
    .auth()
    .onAuthStateChanged(user => {
      if (user !== null) {
        dispatch(receiveLogin(user));
      }
      dispatch(verifySuccess());
    });
};