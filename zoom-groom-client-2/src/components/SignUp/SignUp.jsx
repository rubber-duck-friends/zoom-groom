import { useState } from "react";
import { useHistory } from "react-router-dom";
import { BallTriangle } from "svg-loaders-react";
import signUp from "../../config/signUp";

const SignUp = ({setUser}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  // Sends new user details to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Set loading state to true
    setLoading(true);

    // Unset error message on new request
    setErrorMessage("");

    // Send the post request to the API and update User ID
    try {
      signUp(
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        passwordConfirmation,
        setUser
      )
      // Redirect to Home Page
      history.push("/");
    } catch (error) {
      // Display the error message
      setErrorMessage(error.message);
      // Stop loading
      setLoading(false);
    }
  };

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      {loading && <BallTriangle stroke="#00C9A7" />}

      <h1>Sign Up Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          value={firstName}
          id="firstName"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          value={lastName}
          id="lastName"
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          value={phoneNumber}
          id="phoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="passwordConfirmation">Password Confirmation</label>
        <input
          type="password"
          value={passwordConfirmation}
          id="passwordConfirmation"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <input type="submit" value="Sign Up" />
      </form>
    </>
  );
};

export default SignUp;
