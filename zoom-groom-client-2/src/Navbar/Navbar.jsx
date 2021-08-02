import { useRouteMatch, Link } from "react-router-dom";



const Navbar = () => {
  
  const signInPage = useRouteMatch("/sign-in");
  const signUpPage = useRouteMatch("/sign-up");
  let loggedInUser = localStorage.getItem("jwt")



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
