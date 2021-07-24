// import { useEffect } from "react";
// import api from "./config/api";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import UserProfile from "./components/UserProfile/UserProfile";
import EditUserProfile from "./components/UserProfile/EditUserProfile";
import AllAppointments from "./components/Appointments/AllAppointments";
import Appointment from "./components/Appointments/Appointment";
import NewAppointment from "./components/Appointments/NewAppointment";
import AllPets from "./components/Pets/AllPets";
import PetDetails from "./components/Pets/PetDetails";
import EditPet from "./components/Pets/EditPet";
import AddPet from "./components/Pets/AddPet";
import Roster from "./components/Staff/Roster";



function App() {
  /**
   * Below is an example of a fetch
   */
  // useEffect(() => {
  //   api.get("/dogs").then((res) => console.log(res));
  // }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/user/:username/edit" component={EditUserProfile} />
          <Route path="/user/:username/appointments" component={AllAppointments} />
          <Route path="/user/:username/pet/:id/edit" component={EditPet} />
          <Route path="/user/:username/pet/new" compoennt={AddPet} />
          <Route path="/user/:username/pet/:id" component={PetDetails} />
          <Route path="/user/:username/pets" component={AllPets} />
          <Route path="/user/:username" component={UserProfile} />
          <Route path="/appointment/new" component={NewAppointment} />
          <Route path="/appointment/:id" component={Appointment} />
          <Route path="/staff/roster" component={Roster} />
          <Route component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
