import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import Button from './Button';
import Form from './Form';

function LoginForm ({ className, ...props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) return;
    props.history.push("/officeHome/routineTest");
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
    </div>
  );
}

export default withRouter(LoginForm);
