import React, { useState } from "react";
import Email from "@material-ui/icons/Email";
import VpnKey from "@material-ui/icons/VpnKey";
import ConfirmationNumber from "@material-ui/icons/ConfirmationNumber";
import PermContactCalendar from "@material-ui/icons/PermContactCalendar";
import Form from "../Form";
import Button from "../Button";

export default function AddUser(props) {
  const handleSubmit = () => {
    console.log("zzzzzzzzzzzzzzzzzzzzzz");
  };

  return (
    <div className="mainContent">
      <h2>Add user</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="firstName" required />
          <label htmlFor="firstName">First Name</label>
          <PermContactCalendar className="icon" />
        </div>

        <div>
          <input type="text" name="lastName" required />
          <label htmlFor="lastName">Last Name</label>
          <PermContactCalendar className="icon" />
        </div>

        <div>
          <input type="text" name="staffID" required />
          <label htmlFor="staffID">Staff ID</label>
          <ConfirmationNumber className="icon" />
        </div>

        <div>
          <select name="Administrator" required>
            <option value="" />
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <label htmlFor="Administrator">Administrator</label>
          <VpnKey className="icon" />
        </div>

        <div>
          <input type="email" name="staffEmail" required />
          <label htmlFor="staffEmail">Staff Email</label>
          <Email className="icon" />
        </div>

        <div>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
}
