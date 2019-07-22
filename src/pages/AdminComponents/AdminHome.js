import React, { useContext } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import ContextConsumer from '../Context';
import PersonAdd from "@material-ui/icons/PersonAdd";
import ExitToApp from "@material-ui/icons/ExitToApp";
import Edit from "@material-ui/icons/Edit";
import TableChart from "@material-ui/icons/TableChart";
import Person from "@material-ui/icons/Person";
import Hero from "../Hero";
import SideMenu from "../SideMenu";
import StaffBio from "../StaffBio";
import ProtectedRoute from "../../ProtectedRoute";
import AddUser from "../AdminComponents/AddUser";
import EditUser from "../AdminComponents/EditUser";
import Reports from "../AdminComponents/Reports";
import auth from '../../Auth';

function AdminHome(props) {
const ctx = useContext(ContextConsumer);
  return (
    <div>
      <Hero className="heroText" dir="/login" text={localStorage.getItem('first_name') + ' ' + localStorage.getItem('last_name')}>
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
            <NavLink to="/adminHome/reports" activeClassName="active">
              <TableChart className="link-icon" />{" "}
              <span className="link-text">Reports</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/adminHome/addUser" activeClassName="active">
              <PersonAdd className="link-icon" />{" "}
              <span className="link-text">Add User</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/adminHome/editUser" activeClassName="active">
              <Edit className="link-icon" />{" "}
              <span className="link-text">Edit User</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/adminHome/myProfile" activeClassName="active">
              <Person className="link-icon" />{" "}
              <span className="link-text">My Profile</span>
            </NavLink>
          </li> */}
        </ul>
      </SideMenu>
      <main className={ctx.isMenuOpen ? "" : "collapsedMain"}>
        <Switch>
          <ProtectedRoute
            exact
            path="/adminHome/addUser"
            component={AddUser}
          />
          <ProtectedRoute
            exact
            path="/adminHome/editUser"
            component={EditUser}
          />
          <ProtectedRoute
            exact
            path="/adminHome/reports"
            component={Reports}
          />
        </Switch>
      </main>
    </div>
  );
}

export default AdminHome;
