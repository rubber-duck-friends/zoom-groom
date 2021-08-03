import { useEffect, useState } from "react";
import api from "./config/api";
import jwt_decode from "jwt-decode"

import {
  BrowserRouter as Router,
  Switch,
  Route,
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



function App({currentUserId}) {
  if(localStorage.getItem("jwt")){
    let currentUserId = jwt_decode(localStorage.getItem("jwt"))
    console.log("Current User ID", currentUserId)
  }
  return (
    <div>
      
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/user/:userId/edit" component={EditUserProfile} />
          <Route path="/user/:userId/appointments" component={AllAppointments} />
          <Route path="/user/:userId/pet/:id/edit" component={EditPet} />
          <Route path="/user/:userId/pet/new" component={AddPet} />
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
