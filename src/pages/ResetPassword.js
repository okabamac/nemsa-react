import React, { useState } from 'react';
import Email  from "@material-ui/icons/Email";

export default function ResetPassword ({className, ...props}) {
    const [resetEmail, setResetEmail] = useState('');
    const handleResetPassword = (e) => {
      e.preventDefault();
        if(!resetEmail) return;
        console.log(resetEmail);
    }
    return (
      <div className={className + " resetPasswordForm"}>
        <form onSubmit={handleResetPassword}>
          <fieldset className="fieldSet">
            <legend className="legend">Reset Password</legend>
            <span>
              An email will be sent to you with instructions about how to
              complete the process.
            </span>
            <div className='resetInput'>
              <input
                type="email"
                value={resetEmail}
                name="email"
                onChange={e => setResetEmail(e.target.value)}
                required
              />
              <label htmlFor="email">Enter Email</label>
              <Email className='icon'/>
            </div>
            <div>
              <button>Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
}