import jwt_decode from "jwt-decode";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import EditUserProfile from "./components/UserProfile/EditUserProfile";
import AllPets from "./components/Pets/AllPets";
import PetDetails from "./components/Pets/PetDetails";
import EditPet from "./components/Pets/EditPet";
import AddPet from "./components/Pets/AddPet";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer.jsx";
import getUser from "./config/getUser";
// import UserProfile from "./components/UserProfile/UserProfile";
// import AllAppointments from "./components/Appointments/AllAppointments";
// import Appointment from "./components/Appointments/Appointment";
// import NewAppointment from "./components/Appointments/NewAppointment";
// import Roster from "./components/Staff/Roster";

function App() {
  const [user, setUser] = useState(null);
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      const decodedJwt = jwt_decode(jwt);
      getUser(decodedJwt.user_id, setUser);
    }
  }, []);

  return (
    <div>
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Link to="/pets">Pets</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-up" render={() => <SignUp setUser={setUser} />} />
          <Route path="/sign-in" render={() => <SignIn setUser={setUser} />} />
          <Route path="/user/edit">{user ? <EditUserProfile user={user} setUser={setUser} />:<Home />} </Route>
          <Route path="/pet/edit">{user && pet ? <EditPet pet={pet}/> : <Home />}</Route>
          <Route path="/pet/new">{user ? <AddPet user={user} /> : <Home />}</Route>
          <Route path="/pet" >{user && pet ? <PetDetails dog={pet} user={user}/> : <Home />}</Route>
          <Route path="/pets">{user ? <AllPets user={user} setPet={setPet}/> : <Home />}</Route>
          {/* <Route path="/appointments"> {user && <AllAppointments user={user}/>} </Route> */}
          {/* <Route path="/user/:userId" component={UserProfile} /> */}
          {/* <Route path="/appointment/new">{user && <NewAppointment user={user}/>}</Route> */}
          {/* <Route path="/appointment/:id" component={Appointment} /> */}
          {/* <Route path="/staff/roster" component={Roster} /> */}
          <Route component={Home} />
        </Switch>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
