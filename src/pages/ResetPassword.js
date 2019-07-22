import React, { useState } from "react";
import Email from "@material-ui/icons/Email";
import axios from "axios";

export default function ResetPassword({ className, ...props }) {
  const [resetEmail, setResetEmail] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isFound, setIsFound] = useState();
  const handleResetPassword = async e => {
    e.preventDefault();
    if (!resetEmail) return;
      setIsError(false);
      setIsLoading(true);
      setIsFound(false);
      setIsError(false);
    try {
      const response = await axios.post(
        `https://nemsa-backend.herokuapp.com/api/v1/users/requestReset`, {
          email: resetEmail,
        });
        setIsFound(true);
        if (!response) setIsFound(false);
        setResult(response.data);
        setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      if (error.response.data.error) setError(error.response.data.error);
    }
  };
  return (
    <div className={className + " resetPasswordForm"}>
      <form onSubmit={handleResetPassword}>
        <fieldset className="fieldSet">
          <legend className="legend">Reset Password</legend>
          <span>
            An email will be sent to you with instructions about how to
            complete the process.
          </span>
          <div className="resetInput">
            <input
              type="email"
              value={resetEmail}
              name="email"
              onChange={e => setResetEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Enter Email</label>
            <Email className="icon" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </fieldset>
      </form>
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
