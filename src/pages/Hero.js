import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/nemsa_logo1.png';

export default function Hero ({children, className, ...props}) {
    return (
      <div className='hero'>
        <div className="logoHead">
          <img src={logo} alt=""/>
          <h3>NEMSA</h3>
          <h4>{props.text}</h4>
        </div>
        <Link className={className} to={props.dir}>{children}</Link>
      </div>
    );
}