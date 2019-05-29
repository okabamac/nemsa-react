import React, { useState } from 'react';
import DisplaySearch from './DisplaySearch';
import Button from './Button';
import Form from './Form';

function SearchForm () {
  const [search, setSearch] = useState('');
  const [meter, setMeter] = useState(search);

  const handleSubmit = e => {
    e.preventDefault();
    if (!search) return;
    setMeter(search);
  };

   return (
     <div className="verificationContainer">
         <Form className="search-wrapper cf" onSubmit={handleSubmit}>
           <input
             type="text"
             placeholder="Search here..."
             onChange={e => setSearch(e.target.value)}
             required
           />
           <Button>Search</Button>
         </Form>
       <DisplaySearch search={meter} />
     </div>
   );
};

export default SearchForm;
