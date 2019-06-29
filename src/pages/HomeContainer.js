import React from 'react';
import SearchForm from './SearchForm';

 function HomeContainer () { 

   return (
     <div className="homeContainer">
       <div className="overlay" />
       <div className="content">
         <h1>Meter Verification Portal</h1>
         <SearchForm />
       </div>
       <div className="footer">
         <h5>Copyright &copy; 2019 NEMSA. All Rights Reserved</h5>
       </div>
     </div>
   );
 };

export default HomeContainer;
