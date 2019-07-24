import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
// import * as Yup from "yup";

// const routineSchema = Yup.object().shape({
//   // firstName: Yup.string()
//   //   .min(2, "Too Short!")
//   //   .max(50, "Too Long!")
//   //   .required("Required"),
//   // lastName: Yup.string()
//   //   .min(2, "Too Short!")
//   //   .max(50, "Too Long!")
//   //   .required("Required"),
//   // email: Yup.string()
//   //   .email("Invalid email")
//   //   .required("Required"),
//   vendor_type: Yup.string().required("Required"),
//   country: Yup.string().required("Required"),
//   vendor_name: Yup.string().required("Required"),
//   vendor_email: Yup.string()
//     .email("Invalid email")
//     .required("Required"),
//   vendor_phone_number: Yup.string().required("Required"),
//   yom: Yup.string().required("Required"),
//   batch_id: Yup.string().required("Required"),
//   batch_qty: Yup.string().required("Required"),
//   state: Yup.string().required("Required"),
//   meter_model: Yup.string().required("Required"),
//   meter_class: Yup.string().required("Required"),
//   meter_type: Yup.string().required("Required"),
//   meter_number: Yup.string().required("Required"),
//   date_of_routine_test: Yup.string().required("Required"),
//   tariff_charges: Yup.string().required("Required")
// });

export default function RoutineTest() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFound, setIsFound] = useState();

  return (
    <div className="mainContent">
      <h2>Routine Test</h2>
      <Formik
        initialValues={{
          vendor_type: "",
          country: "",
          vendor_name: "",
          vendor_email: "",
          vendor_phone_number: "",
          yom: "",
          batch_id: "",
          batch_qty: "",
          state: "",
          meter_model: "",
          meter_class: "",
          meter_type: "",
          meter_number: "",
          date_of_routine_test: "",
          tariff_charges: ""
        }}
        // validationSchema={routineSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          setIsLoading(true);
          setIsFound(false);
          setIsError(false);
          try {
            const headers = {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`
            };
            const response = await axios.post(
              `https://nemsa-backend.herokuapp.com/api/v1/routine/addRoutine`,
              values,
              { headers: headers }
            );
            setIsFound(true);
            if (!response) setIsFound(false);
            setResult(response.data);
            setIsLoading(false);
          } catch (error) {
            setIsError(true);
            setIsLoading(false);
            if (error.response.data.error)
              setError(error.response.data.error);
          }
        }}
      >
        {({
          touched,
          values,
          errors,
          handleChange,
          isSubmitting,
          setFieldValue
        }) => (
          <div className="testForms">
            <Form>
              <div>
                <label htmlFor="vendor_type">Vendor Type</label>
                <Field
                  name="vendor_type"
                  component="select"
                  onChange={e => {
                    if (e.target.value === "local")
                      setFieldValue("country", "NG");
                    handleChange(e);
                  }}
                  required
                >
                  <option value="">Select Vendor</option>
                  <option value="local">Local</option>
                  <option value="foreign">Foreign</option>
                </Field>
                {/* {errors.vendor_type && touched.vendor_type && (
                  <p id="feedback">{errors.vendor_type}</p>
                )} */}
              </div>

              <div>
                <label htmlFor="country">Country of Manufacture</label>
                <Field name="country" component="select" required>
                  <option value="">Select Country </option>
                  <option value="AF">Afghanistan</option>
                  <option value="AX">Åland Islands</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia, Plurinational State of</option>
                  <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BV">Bouvet Island</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="BN">Brunei Darussalam</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="CV">Cape Verde</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo</option>
                  <option value="CD">
                    Congo, the Democratic Republic of the
                  </option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CI">Côte d'Ivoire</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curaçao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands (Malvinas)</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HM">
                    Heard Island and McDonald Islands
                  </option>
                  <option value="VA">Holy See (Vatican City State)</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran, Islamic Republic of</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                  <option value="JP">Japan</option>
                  <option value="JE">Jersey</option>
                  <option value="JO">Jordan</option>
                  <option value="KZ">Kazakhstan</option>
                  <option value="KE">Kenya</option>
                  <option value="KI">Kiribati</option>
                  <option value="KP">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="KR">Korea, Republic of</option>
                  <option value="KW">Kuwait</option>
                  <option value="KG">Kyrgyzstan</option>
                  <option value="LA">Lao People's Democratic Republic</option>
                  <option value="LV">Latvia</option>
                  <option value="LB">Lebanon</option>
                  <option value="LS">Lesotho</option>
                  <option value="LR">Liberia</option>
                  <option value="LY">Libya</option>
                  <option value="LI">Liechtenstein</option>
                  <option value="LT">Lithuania</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MO">Macao</option>
                  <option value="MK">
                    Macedonia, the former Yugoslav Republic of
                  </option>
                  <option value="MG">Madagascar</option>
                  <option value="MW">Malawi</option>
                  <option value="MY">Malaysia</option>
                  <option value="MV">Maldives</option>
                  <option value="ML">Mali</option>
                  <option value="MT">Malta</option>
                  <option value="MH">Marshall Islands</option>
                  <option value="MQ">Martinique</option>
                  <option value="MR">Mauritania</option>
                  <option value="MU">Mauritius</option>
                  <option value="YT">Mayotte</option>
                  <option value="MX">Mexico</option>
                  <option value="FM">Micronesia, Federated States of</option>
                  <option value="MD">Moldova, Republic of</option>
                  <option value="MC">Monaco</option>
                  <option value="MN">Mongolia</option>
                  <option value="ME">Montenegro</option>
                  <option value="MS">Montserrat</option>
                  <option value="MA">Morocco</option>
                  <option value="MZ">Mozambique</option>
                  <option value="MM">Myanmar</option>
                  <option value="NA">Namibia</option>
                  <option value="NR">Nauru</option>
                  <option value="NP">Nepal</option>
                  <option value="NL">Netherlands</option>
                  <option value="NC">New Caledonia</option>
                  <option value="NZ">New Zealand</option>
                  <option value="NI">Nicaragua</option>
                  <option value="NE">Niger</option>
                  <option value="NG">Nigeria</option>
                  <option value="NU">Niue</option>
                  <option value="NF">Norfolk Island</option>
                  <option value="MP">Northern Mariana Islands</option>
                  <option value="NO">Norway</option>
                  <option value="OM">Oman</option>
                  <option value="PK">Pakistan</option>
                  <option value="PW">Palau</option>
                  <option value="PS">Palestinian Territory, Occupied</option>
                  <option value="PA">Panama</option>
                  <option value="PG">Papua New Guinea</option>
                  <option value="PY">Paraguay</option>
                  <option value="PE">Peru</option>
                  <option value="PH">Philippines</option>
                  <option value="PN">Pitcairn</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="PR">Puerto Rico</option>
                  <option value="QA">Qatar</option>
                  <option value="RE">Réunion</option>
                  <option value="RO">Romania</option>
                  <option value="RU">Russian Federation</option>
                  <option value="RW">Rwanda</option>
                  <option value="BL">Saint Barthélemy</option>
                  <option value="SH">
                    Saint Helena, Ascension and Tristan da Cunha
                  </option>
                  <option value="KN">Saint Kitts and Nevis</option>
                  <option value="LC">Saint Lucia</option>
                  <option value="MF">Saint Martin (French part)</option>
                  <option value="PM">Saint Pierre and Miquelon</option>
                  <option value="VC">Saint Vincent and the Grenadines</option>
                  <option value="WS">Samoa</option>
                  <option value="SM">San Marino</option>
                  <option value="ST">Sao Tome and Principe</option>
                  <option value="SA">Saudi Arabia</option>
                  <option value="SN">Senegal</option>
                  <option value="RS">Serbia</option>
                  <option value="SC">Seychelles</option>
                  <option value="SL">Sierra Leone</option>
                  <option value="SG">Singapore</option>
                  <option value="SX">Sint Maarten (Dutch part)</option>
                  <option value="SK">Slovakia</option>
                  <option value="SI">Slovenia</option>
                  <option value="SB">Solomon Islands</option>
                  <option value="SO">Somalia</option>
                  <option value="ZA">South Africa</option>
                  <option value="GS">
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option value="SS">South Sudan</option>
                  <option value="ES">Spain</option>
                  <option value="LK">Sri Lanka</option>
                  <option value="SD">Sudan</option>
                  <option value="SR">Suriname</option>
                  <option value="SJ">Svalbard and Jan Mayen</option>
                  <option value="SZ">Swaziland</option>
                  <option value="SE">Sweden</option>
                  <option value="CH">Switzerland</option>
                  <option value="SY">Syrian Arab Republic</option>
                  <option value="TW">Taiwan, Province of China</option>
                  <option value="TJ">Tajikistan</option>
                  <option value="TZ">Tanzania, United Republic of</option>
                  <option value="TH">Thailand</option>
                  <option value="TL">Timor-Leste</option>
                  <option value="TG">Togo</option>
                  <option value="TK">Tokelau</option>
                  <option value="TO">Tonga</option>
                  <option value="TT">Trinidad and Tobago</option>
                  <option value="TN">Tunisia</option>
                  <option value="TR">Turkey</option>
                  <option value="TM">Turkmenistan</option>
                  <option value="TC">Turks and Caicos Islands</option>
                  <option value="TV">Tuvalu</option>
                  <option value="UG">Uganda</option>
                  <option value="UA">Ukraine</option>
                  <option value="AE">United Arab Emirates</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                  <option value="UM">
                    United States Minor Outlying Islands
                  </option>
                  <option value="UY">Uruguay</option>
                  <option value="UZ">Uzbekistan</option>
                  <option value="VU">Vanuatu</option>
                  <option value="VE">
                    Venezuela, Bolivarian Republic of
                  </option>
                  <option value="VN">Viet Nam</option>
                  <option value="VG">Virgin Islands, British</option>
                  <option value="VI">Virgin Islands, U.S.</option>
                  <option value="WF">Wallis and Futuna</option>
                  <option value="EH">Western Sahara</option>
                  <option value="YE">Yemen</option>
                  <option value="ZM">Zambia</option>
                  <option value="ZW">Zimbabwe</option>
                </Field>
              </div>

              <div>
                <label htmlFor="vendor_name">Vendor Name</label>
                <Field type="text" name="vendor_name" required />
              </div>

              <div>
                <label htmlFor="vendor_email">Vendor Email Address</label>
                <Field type="email" name="vendor_email" required />
              </div>

              <div>
                <label htmlFor="vendor_phone_number">
                  Vendor Phone Number
                </label>
                <Field type="text" name="vendor_phone_number" required />
              </div>

              <div>
                <label htmlFor="yom">Year of Manufacture</label>
                <Field type="date" name="yom" required />
              </div>

              <div>
                <label htmlFor="batch_id">Batch ID</label>
                <Field type="text" name="batch_id" required />
              </div>

              <div>
                <label htmlFor="batch_qty">Batch Quantity</label>
                <Field type="number" name="batch_qty" required />
              </div>

              <div>
                <label htmlFor="state">State</label>
                <Field name="state" component="select" required>
                  <option value="">Select State</option>
                  <option value="FCT">Abuja FCT</option>
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
                </Field>
              </div>

              <div>
                <label htmlFor="meter_model">Meter Model</label>
                <Field name="meter_model" component="select" required>
                  <option value="">Select Model</option>
                  <option value="E336">E336</option>
                  <option value="E316">E316</option>
                  <option value="ZMG410CR4.000B.02 ">
                    ZMG410CR4.000B.02
                  </option>
                  <option value="MT880">MT880</option>
                  <option value="MK10E">MK10E</option>
                  <option value="ACE661B040">ACE661B040</option>
                </Field>
              </div>

              <div>
                <label htmlFor="meter_class">Meter Class</label>
                <Field name="meter_class" component="select" required>
                  <option value="">Select Class</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="0.5S">0.5S</option>
                </Field>
              </div>

              <div>
                <label htmlFor="meter_type">Meter Type</label>
                <Field name="meter_type" component="select" required>
                  <option value="">Select Type</option>
                  <option value="4WIRE">4WIRE</option>
                  <option value="1PHASE2WIRES">1PHASE2WIRES</option>
                  <option value="2WIRE">2WIRE</option>
                  <option value="3PHASE3WIRE">3PHASE3WIRE</option>
                  <option value="3PHASE4WIRE">3PHASE4WIRE</option>
                </Field>
              </div>

              <div>
                <label htmlFor="meter_number">Meter Number</label>
                <Field type="text" name="meter_number" required />
              </div>

              <div>
                <label htmlFor="date_of_routine_test">
                  Date of Routine Test
                </label>
                <Field type="date" name="date_of_routine_test" required />
              </div>

              <div>
                <label htmlFor="tariff_charge">Tariff Charge</label>
                <Field type="text" name="tariff_charges" required />
              </div>

              <div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
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
                <p>{result && <span>{result.message}</span>}</p>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
