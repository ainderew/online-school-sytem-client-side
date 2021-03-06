import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import "../../scss_variables/global.styles.scss";

//COMPONENTS
import LoginPage from "../Login-page/login-page.component";
import TeacherLoginPage from "../Teacher-login/tacher-login-page.component";
import EnrollmentPage from "../Enrollment-page/enrollment-page.component";
import HomePage from "../Home-page/home-page.components";
import SchedulePage from "../Schedule-Page/schedule-page.component"
import Header from "../../Components/header/header.component";
import PhoneHeader from "../../Components/header-phone/header-phone.component";

const MainContainer = () => {
  const userData = useSelector(state => state.userData)
  
  console.log(Object.entries(userData).length)
  
 
  return (
    <Router>
      {/* <div className="Main-container"> */}
        {(Object.entries(userData).length === 0) ? null : <Header />}
        {(Object.entries(userData).length === 0) ? null : <PhoneHeader />}
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/teacher" component={TeacherLoginPage} />
          <Route exact path="/enrollment" component={EnrollmentPage} />
          <Route exact path="/schedule" component={SchedulePage} />
          <Route exact path="/home" component={(Object.entries(userData).length === 0) ? LoginPage : HomePage} />
        </Switch>
      {/* </div> */}
    </Router>
  );
};

export default MainContainer;
