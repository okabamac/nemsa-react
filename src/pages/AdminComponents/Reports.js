import React, { useState } from "react";
import DateRange from "@material-ui/icons/DateRange";
import PermContactCalendar from "@material-ui/icons/PermContactCalendar";
import Form from "../Form";
import Button from "../Button";

export default function Reports(props) {
  const handleSubmit = () => {
    console.log("zzzzzzzzzzzzzzzzzzzzzz");
  };

  return (
    <div className="mainContent">
      <h2>Reports</h2>
      <div className="reportForms">
        <div>
          <h3>By Date</h3>
          <Form onSubmit={handleSubmit}>
            <div>
              <input type="date" name="from" required />
              <DateRange className="icon" />
            </div>

            <div>
              <input type="date" name="to" required />
              <DateRange className="icon" />
            </div>
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </div>
        <div>
          <h3>By State</h3>
          <Form onSubmit={handleSubmit}>
            <div>
              <select name="State" required>
                <option value="" />
                <option value="Abuja FCT">Abuja FCT</option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu">Enugu</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nassarawa">Nassarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
              </select>
              <label htmlFor="State">State</label>
              <PermContactCalendar className="icon" />
            </div>
            <div>
              <select name="Month" required>
                <option value="" />
                <option value="0">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">June</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">December</option>
              </select>
              <label htmlFor="Month">Month</label>
              <PermContactCalendar className="icon" />
            </div>
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </div>
        <div>
          <h3>Print Seal</h3>
          <Form onSubmit={handleSubmit}>
            <div>
              <input type="text" name="batchID" required />
              <label htmlFor="batchID">Batch ID</label>
              <PermContactCalendar className="icon" />
            </div>
            <div>
              <input type="text" name="staffID" required />
              <label htmlFor="staffID">Staff ID</label>
              <PermContactCalendar className="icon" />
            </div>
            <div>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
