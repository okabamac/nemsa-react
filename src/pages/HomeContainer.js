import React from 'react';
import SearchForm from './SearchForm';

 function HomeContainer () { 

   return (
     <div className='homeContainer'>
       <h1>Meter Verification Portal</h1>
       <SearchForm />
       <div className='footer'>
         <h5>Copyright &copy; 2019 NEMSA. All Rights Reserved</h5>
       </div>
     </div>
   );
 };

export default HomeContainer;
