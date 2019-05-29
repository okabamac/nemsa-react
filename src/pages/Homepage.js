import React from 'react';
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";


import Hero from './Hero';

import HomeContainer from './HomeContainer';

export default function Homepage () {
    return (
      <div className="container">
        <Hero className="heroText" dir="login">
          <ArrowRightAlt className="hero-icon" />
        </Hero>
        <HomeContainer />
      </div>
    );
}

