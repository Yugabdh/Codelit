import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";

const VisibleIfLoggedIn = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);

  if (isLoaded(auth) && !isEmpty(auth)) {
    return children;
  }

  return <></>;
};

export default VisibleIfLoggedIn;