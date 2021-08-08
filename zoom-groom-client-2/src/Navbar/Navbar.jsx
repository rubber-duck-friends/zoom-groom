import { useRouteMatch, Link, useHistory } from "react-router-dom";

import logOut from "../utils/logOut";

const Navbar = ({user, setUser}) => {
  const signInPage = useRouteMatch("/sign-in");
  const signUpPage = useRouteMatch("/sign-up");
  const otherPage = !signInPage && !signUpPage;

  const history = useHistory();

  return (
    <nav>
      <ul>
        {!user && signInPage && (
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        )}
        {!user && signUpPage && (
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        )}
        {!user && otherPage && (
          <>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li>
              <Link to="/sign-in">Log In</Link>
            </li>
          </>
        )}
        {user && (
          <li>
            <button onClick={() => logOut(history, setUser)}>Sign Out</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
