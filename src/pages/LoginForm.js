import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import Button from "./Button";
import Form from "./Form";
import axios from "axios";
import auth from "../Auth";

function LoginForm({ className, ...props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFound, setIsFound] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    if (!email || !password) return;
    setIsError(false);
    setIsLoading(true);
    setIsFound(false);
    setIsError(false);
    try {
      const response = await auth.login(email, password, props);
      setIsFound(true);
      if (!response) setIsFound(false);
      setResult(response.data);
      setIsLoading(false);
      !response.data.admin
        ? props.history.push("/officeHome/routineTest")
        : props.history.push("/adminHome/reports");
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      if (error.response.data.error) setError(error.response.data.error);
    }
  };
  return (
    <div className={className + " loginForm"}>
      <Form onSubmit={handleSubmit}>
        <fieldset className="fieldSet">
          <legend className="legend">Login</legend>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
            <Email className="icon" />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <Lock className="icon" />
          </div>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </fieldset>
      </Form>
      <div
        style={{
          textAlign: "center",
          margin: "auto",
          position: "relative",
          top: "2.3em"
        }}
      >
        {isLoading ? (
          <div className="loader" />
        ) : (
          <div>
            {!isFound && isError ? (
              <span className="message" style={{ color: "red" }}>
                <p>{error}</p>
              </span>
            ) : (
              <span className="message">
                <p>{result && <span>{}</span>}</p>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default withRouter(LoginForm);
