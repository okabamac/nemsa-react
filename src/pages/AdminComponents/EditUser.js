import React, { useState } from "react";
import Email from "@material-ui/icons/Email";
import ConfirmationNumber from "@material-ui/icons/ConfirmationNumber";
import Form from "../Form";
import Button from "../Button";;

export default function EditUser(props) {

  const handleSubmit = () => {
    console.log('zzzzzzzzzzzzzzzzzzz');
  }
  return (
    <div className="mainContent">
      <h2>Edit user</h2>
      <Form className="editUserForm" onSubmit={handleSubmit}>
        <div>
          <input type="text" name="staffID" required />
          <label htmlFor="staffID">Staff ID</label>
          <ConfirmationNumber className="icon" />
        </div>

        <div>
          <input type="email" name="staffEmail" required />
          <label htmlFor="staffEmail">Staff Email</label>
          <Email className="icon" />
        </div>

        <div>
          <Button type="submit">Search</Button>
        </div>
      </Form>
    </div>
  );
}
