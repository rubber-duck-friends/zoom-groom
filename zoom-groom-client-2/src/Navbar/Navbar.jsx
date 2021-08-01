import { useRouteMatch, Link } from "react-router-dom";

function parseJwt(jwt) {
  // if (!jwt) {
  //   return;
  // }
  // const base64Url = jwt.split(".")[1];
  // const base64 = base64Url.replace("-", "+").replace("_", "/");
  // return JSON.parse(window.atob(base64));
}

const Navbar = () => {
  const signInPage = useRouteMatch("/sign-in");
  const signUpPage = useRouteMatch("/sign-up");
  const jwt = localStorage.getItem("jwt");
  let loggedInUser = parseJwt(jwt).exp;

  if (!loggedInUser && signInPage) {
    return <Link to="/sign-up">Sign Up</Link>;
  } else if (!loggedInUser && signUpPage) {
    return <Link to="/sign-in">Log In</Link>;
  } else if (loggedInUser && loggedInUser.is_staff) {
    return <p>STAFF BAR</p>;
  } else if (loggedInUser && !loggedInUser.is_staff) {
    return <p>NORMAL USER BAR</p>;
  } else {
    return (
      <ul>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
        <li>
          <Link to="/sign-in">Log In</Link>
        </li>
      </ul>
    );
  }
};

export default Navbar;
