/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import DateRange from "@material-ui/icons/DateRange";
import PermContactCalendar from "@material-ui/icons/PermContactCalendar";
import Form from "../Form";
import Button from "../Button";
import axios from 'axios';
import ReactToPrint from 'react-to-print';

import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)

// for React 16.4.x use: import { ReactTabulator }
import { React15Tabulator} from "react-tabulator"; // for React 15.x

const routineCol = [
  { title: "SN", formatter: "rownum", align: "center", width: 50 },
  { title: "Meter Number", field: "meter_number", width: 150 },
  { title: "Seal", field: "seal", width: 200 },
  { title: "Vendor Name", field: "vendor_name", width: 150 },
  { title: "State", field: "state", width: 100 },
  {
    title: "Date of Routine Test",
    field: "date_of_routine_test",
    width: 200,

  },
  {
    title: "Expiry Date After Test",
    field: "expiry_date_after_routine_test",
    width: 200,

  }
];
const typeCol = [
  { title: "SN", formatter: "rownum", align: "center", width: 50 },
  { title: "Meter Number", field: "meter_number", width: 150 },
  { title: "Vendor Name", field: "vendor_name", width: 200 },
  {
    title: "Date Certified",
    field: "date_certified",
    width: 200,
  },
  {
    title: "Expiry Date After Certification",
    field: "expiry_date_after_cert",
    width: 250,
  }
];

const recertCol = [
  { title: "SN", formatter: "rownum", align: "center", width: 50 },
  { title: "DISCO", field: "disco", width: 150 },
  { title: "Business Unit Name", field: "business_unit_name", width: 200 },
  { title: "Meter Number", field: "meter_number", width: 150 },
  {
    title: "Date of Routine Test",
    field: "date_of_routine_test",
    width: 200,
  },
  {
    title: "Date of Last Recertification",
    field: "date_of_last_recert",
    width: 200,
  }
];

const printCol = [
  { title: "SN", formatter: "rownum", align: "center", width: 50 },
  { title: "Meter Number", field: "meter_number", width: 150 },
  { title: "Seal", field: "seal", width: 200 }
];

export default function Reports(props) {
  let componentRef = useRef();
  const [result, setResult] = useState(null);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [state, setState] = useState("");
  const [month, setMonth] = useState("");
  const [test, setTest] = useState("");
  const [batch_id, setBatchID] = useState("");
  const [staff_id, setStaffID] = useState("");
  const [report, setReport] = useState("byDate");
  const [columns, setColumns] = useState('');
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFound, setIsFound] = useState();
  
  const handleFormsChange = (e) => {
    e.preventDefault();
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    setIsLoading(true);
    setIsFound(false);
    setIsError(false);
    test === 'routine' ? setColumns(routineCol) : (test=== 'type' ? setColumns(typeCol) : setColumns(recertCol));
    let url;
    if (report === 'byDate') url = `https://nemsa-backend.herokuapp.com/api/v1/report/byDate?from=${from}&test=${test}&to=${to}`;
    if (report === 'byState') url = `https://nemsa-backend.herokuapp.com/api/v1/report/byState?state=${state}&test=${test}&month=${month}`;
    if (report === 'printSeal') {
      setColumns(printCol);
       url = `https://nemsa-backend.herokuapp.com/api/v1/report/byBatch?batch_id=${batch_id}&staff_id=${staff_id}`;
    }
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      };
      const { data } = await axios.get(
        url,

        { headers: headers }
      );
      setIsFound(true);
      if (!data) setIsFound(false);
      setResult(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      if (error.response.data.data) setError(error.response.data.data);
    }
  };
  const options = {
    printAsHtml: true, //enable html table printing
    printCopyStyle: true, //copy Tabulator styling to HTML table
    movableRows: true,
    height: "311px",
    layout: "fitColumns",
    paginationSize: 20,
    downloadDataFormatter: data => data,
    downloadReady: (fileContents, blob) => blob,
    printHeader: "<h1>Example Table Header<h1>",
    printFooter: "<h2>Example Table Footer<h2>"
  };
  return (
    <div className="mainContent">
      <h2>Reports</h2>
      <div className="reportForms">
        <div>
          <h3>Select Report</h3>
          <Form onSubmit={handleFormsChange}>
            <div>
              <select
                name="test"
                value={report}
                onChange={e => setReport(e.target.value)}
                required
                style={{ paddingLeft: "4px" }}
              >
                <option value="byDate">By Date</option>
                <option value="byState">By State</option>
                <option value="printSeal">Print Seal</option>
              </select>
            </div>
          </Form>
        </div>
        {report === "byDate" ? (
          <div>
            <h3>By Date</h3>
            <Form onSubmit={handleSubmit}>
              <div>
                <input
                  type="date"
                  name="from"
                  value={from}
                  onChange={e => setFrom(e.target.value)}
                  required
                />
                <DateRange className="icon" />
              </div>

              <div>
                <input
                  type="date"
                  name="to"
                  value={to}
                  onChange={e => setTo(e.target.value)}
                  required
                />
                <DateRange className="icon" />
              </div>
              <div>
                <select
                  name="test"
                  value={test}
                  onChange={e => setTest(e.target.value)}
                  required
                  style={{ paddingLeft: "4px" }}
                >
                  <option value="">Select Test</option>
                  <option value="routine">Routine Test</option>
                  <option value="type">Type Test</option>
                  <option value="recertification">Recertification</option>
                </select>
              </div>
              <div>
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </div>
        ) : report === "byState" ? (
          <div>
            <h3>By State</h3>
            <Form onSubmit={handleSubmit}>
              <div>
                <select
                  name="state"
                  value={state}
                  onChange={e => setState(e.target.value)}
                  required
                >
                  <option value="" />
                  <option value="FCT">Abuja FCT</option>
                  <option value="Abia">Abia</option>
                  <option value="Adamawa">Adamawa</option>
                  <option value="AkwaIbom">Akwa Ibom</option>
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
                <select
                  name="Month"
                  value={month}
                  onChange={e => setMonth(e.target.value)}
                  required
                >
                  <option value="" />
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <label htmlFor="Month">Month</label>
                <PermContactCalendar className="icon" />
              </div>
              <div>
                <select
                  name="test"
                  value={test}
                  onChange={e => setTest(e.target.value)}
                  required
                  style={{ paddingLeft: "4px" }}
                >
                  <option value="">Select Test</option>
                  <option value="routine">Routine Test</option>
                  <option value="type">Type Test</option>
                  <option value="recertification">Recertification</option>
                </select>
              </div>
              <div>
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </div>
        ) : (
          <div>
            <h3>Print Seal</h3>
            <Form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="batch_id"
                  value={batch_id}
                  onChange={e => setBatchID(e.target.value)}
                  required
                />
                <label htmlFor="batch_id">Batch ID</label>
                <PermContactCalendar className="icon" />
              </div>
              <div>
                <input
                  type="text"
                  name="staff_id"
                  value={staff_id}
                  onChange={e => setStaffID(e.target.value)}
                  required
                />
                <label htmlFor="staff_id">Staff ID</label>
                <PermContactCalendar className="icon" />
              </div>
              <div>
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </div>
        )}
      </div>
      <div
        style={{
          textAlign: "center",
          margin: "auto",
          position: "relative",
          top: "2em",
          fontSize: "1.3em"
        }}
      >
        {isLoading ? (
          <div className="spinner">
            <div />
            <div />
            <div />
            <div />
          </div>
        ) : (
          <div>
            {!isFound && isError ? (
              <span className="errorMessage" style={{ color: "red" }}>
                <p>{error}</p>
              </span>
            ) : (
              <span className="message">
                <div style={{ maxWidth: "85%", margin: "auto" }}>
                  {result && (
                    <div>
                      <ReactToPrint
                        trigger={() => (
                          <a href="#" style={{ color: "blue", marginBottom: '2em' }}>
                            Print Table
                          </a>
                        )}
                        content={() => componentRef}
                      />
                      <React15Tabulator
                        options={options}
                        data-custom-attr="test-custom-attribute"
                        className="custom-css-class"
                        columns={columns}
                        data={result}
                        ref={el => (componentRef = el)}
                      />
                      <a
                        href="#"
                        style={{
                          color: "blue",
                          marginRight: "10px"
                        }}
                        onClick={() => {
                          componentRef.table.download(
                            "csv",
                            `Report ${report}.csv`
                          );
                        }}
                      >
                        Download CSV
                      </a>
                      <a
                        href="#"
                        style={{
                          color: "blue",
                          marginLeft: "10px"
                        }}
                        onClick={() => {
  
                          componentRef.table.download(
                            "pdf",
                            `Report ${report}.pdf`,
                            {
                              orientation:
                                "landscape", //set page orientation to portrait
                              title:
                                "Nigerian Electricity Management Services Agency \nNEMSA", //add title to report
                              jsPDF: {
                                unit: "px" //set units to inches
                              },
                              autoTable: {
                                columnStyles: {
            id: {fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold'}
        },
                                margin: { top: 60 }
                              }
                            }
                          );
                        }}
                      >
                        Download PDF
                      </a>
                    </div>
                  )}
                </div>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
