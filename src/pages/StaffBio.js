import React, { useState } from "react";
import girl from "../images/girl.svg";

import ContactPhone from "@material-ui/icons/ContactPhone";
import LocationOn from "@material-ui/icons/LocationOn";
import BarChart from "@material-ui/icons/BarChart";
import CloudUpload from "@material-ui/icons/CloudUpload";
import PermContactCalendar from "@material-ui/icons/PermContactCalendar";
import Form from "./Form";
import Button from "./Button";

function StaffBio(props) {
  const handleSubmit = () => {
    console.log("zzzzzzzzzzzzzzzzzzzzzz");
  };

  return (
    <div className="mainContent">
      <h2>Staff Bio</h2>
      <div className="staffPage">
        <div className="avatarDiv">
          <img src={girl} alt="Staff Avatar" />
          <Form>
            <div>
              <input
                type="file"
                name="file"
                id="file"
                className="inputfile"
                accept="image/gif, image/jpeg, image/png"
              />
              <label htmlFor="file">
                Choose a file <CloudUpload className="uploadIcon" />{" "}
              </label>
            </div>
            <div>
              <Button>Submit</Button>
            </div>
          </Form>
        </div>

        <div className="infoDiv">
          <div>
            <div className="head">
              <PermContactCalendar />
            </div>
            <div className="body">
              <h5>
                Name: <span className="name">Rebecca Sidwell</span>
              </h5>
              <h5>
                DOB: <span className="name">1/06/1996</span>
              </h5>
              <h5>
                Role: <span className="name">Staff</span>
              </h5>
            </div>
          </div>
          <div>
            <div className="head">
              <ContactPhone />
            </div>
            <div className="body">
              <h5>
                Phone: <span className="phone">+2349099779460</span>
              </h5>
              <h5>
                Email: <span className="email">rebeccaseed@gmail.com</span>
              </h5>
              <h5>
                ID: <span className="name">Staff1234</span>
              </h5>
            </div>
          </div>
          <div>
            <div className="head">
              <LocationOn />
            </div>
            <div className="body">
              <h5>
                Address:{" "}
                <span className="address">
                  National Library of Nigeria Plot 274, Sanusi Dantata House,
                  Way,Central Business District, PMB 1, Garki – Abuja.
                </span>
              </h5>
            </div>
          </div>
        </div>
        <div className="extraInfoDiv">
          <div>
            <BarChart />
          </div>
          <div>Total Records:
            23,4563
          </div>
          <div>Delivery Rate:
            25%
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffBio;
