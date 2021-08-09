import { useState } from "react";
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
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer.jsx"



function App() {
  const [user, setUser] = useState(null)

  return (
    <div>
      
      <Router>
      <Navbar user={user} setUser={setUser}/>
      <Link to="/user/edit">Edit User</Link>
      <Link to="/pet/new">New Pet</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-up" render={()=><SignUp setUser={setUser}/>} />
          <Route path="/sign-in" render={()=><SignIn setUser={setUser}/>} />
          <Route path="/user/edit" render={()=><EditUserProfile user={user} setUser={setUser}/>} />
          <Route path="/user/:userId/appointments" component={AllAppointments} />
          <Route path="/user/:userId/pet/:id/edit" component={EditPet} />
          <Route path="/pet/new" render={()=><AddPet user={user}/>} />
          <Route path="/user/:userId/pet/:id" component={PetDetails} />
          <Route path="/user/:userId/pets" component={AllPets} />
          <Route path="/user/:userId" component={UserProfile} />
          <Route path="/appointment/new" component={NewAppointment} />
          <Route path="/appointment/:id" component={Appointment} />
          <Route path="/staff/roster" component={Roster} />
          <Route component={Home} />
        </Switch>
      </Router>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
