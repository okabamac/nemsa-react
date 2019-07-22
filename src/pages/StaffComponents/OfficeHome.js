import React, { useContext } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import ContextConsumer from "../Context";
import AlarmOn from "@material-ui/icons/AlarmOn";
import MergeType from "@material-ui/icons/MergeType";
import Update from "@material-ui/icons/Update";
import ProtectedRoute from "../../ProtectedRoute";
import Person from "@material-ui/icons/Person";
import Hero from "../Hero";
import SideMenu from "../SideMenu";
import StaffBio from "../StaffBio";
import TypeTest from "./TypeTest";
import RoutineTest from "./RoutineTest";
import Recertification from "./Recertification";
import ExitToApp from "@material-ui/icons/ExitToApp";
import auth from '../../Auth'


function OfficeHome(props) {
  const ctx = useContext(ContextConsumer);
  return (
    <div>
      <Hero
        className="heroText"
        dir="/login"
        text={
          localStorage.getItem("first_name") +
          " " +
          localStorage.getItem("last_name")
        }
      >
        <div
          onClick={() => {
            auth.logout(() => {
              props.history.push("/login");
            });
          }}
        >
          Logout
          <ExitToApp className="hero-icon" />
        </div>
      </Hero>
      <SideMenu>
        <ul>
          <li>
            <NavLink to="/officeHome/routineTest" activeClassName="active">
              <AlarmOn className="link-icon" />{" "}
              <span className="link-text">Routine Test</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/officeHome/typeTest" activeClassName="active">
              <MergeType className="link-icon" />{" "}
              <span className="link-text">Type Test</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/officeHome/recertification"
              activeClassName="active"
            >
              <Update className="link-icon" />{" "}
              <span className="link-text">Recertification</span>
            </NavLink>
          </li>
        </ul>
      </SideMenu>
      <main className={ctx.isMenuOpen ? "" : "collapsedMain"}>
        <Switch>
          <ProtectedRoute
            exact
            path="/officeHome/routineTest"
            component={RoutineTest}
          />
          <ProtectedRoute exact path="/officeHome/typeTest" component={TypeTest} />
          <ProtectedRoute
            exact
            path="/officeHome/recertification"
            component={Recertification}
          />
        </Switch>
      </main>
    </div>
  );
}

export default OfficeHome;
