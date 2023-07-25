import { useState } from 'react';
import '../assets/SearchBar.css';
export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   function handleChange(value){
      setId(value);
   }

   return (
      <>
         { 
         <div className='searchBar'>
            <input type='search' className='inputSearch' placeholder='id...' value={id} onChange={(e) => handleChange(e.target.value) } />
               <button onClick={() => onSearch(id)} className='buttonSearch'>Agregar</button> 
         </div>
         }
      </>
   );
}
