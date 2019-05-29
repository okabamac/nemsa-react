import React, { useState, useEffect, useContext } from 'react';
import ArrowBack from "@material-ui/icons/ArrowBack";
import Home from "@material-ui/icons/Home";
import nemsa from '../images/nemsa_logo1.png'
import axios from 'axios';
import ContextConsumer from './Context';
import Hero from './Hero';
import  ResetPassword from './ResetPassword';
import LoginForm from './LoginForm';
import Button from './Button';

 function LoginPage() {
  const [showReset, setShowReset] = useState(false)
  const toggleForms = () => {
    setShowReset(!showReset);
    }

   return (
     <>
        <Hero className="heroText" dir="/">
        <Home className='hero-icon'/>
      </Hero>
       <div className="entryForms">
         <div className="content">
           <div className="cardHead">
             <img src={nemsa} alt="NEMSA Logo" className="nemsa_logo" />
           </div>
           <div className="contentForms">
             <LoginForm className={!showReset ? "show" : "hide"} />
             <div className="errorMessage" />
             <ResetPassword className={showReset ? "show" : "hide"} />
           </div>
           <div className="forgotPassword">
             <hr />
             <span>
               <Button onClick={toggleForms}>
                 {!showReset ? "Forgot Password?" : <ArrowBack />}
               </Button>
             </span>
           </div>
         </div>
       </div>
     </>
   );
}

export default LoginPage;
