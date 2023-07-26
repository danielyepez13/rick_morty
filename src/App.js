import { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';
// import characters from './data.js';

function App() {
   const [characters, setCharacters] = useState([]);
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            // si encuentra un id igual en el caracter que entra retorna falso
            if(characters.some(char => char.id === data.id)) return false;

            // siempre estarán en el estado characters con keys distintas
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   function onRandom(){
      // Retorna del 1 al 826
      const random = Math.floor(Math.random() * 826) + 1; // sin el +1 retorna del 0 al 825
      axios(`https://rickandmortyapi.com/api/character/${random}`).then(({ data }) => {
         if (data.name) {
            // si encuentra un id igual en el caracter que entra retorna falso
            if (characters.some(char => char.id === data.id)) return false;

            // siempre estarán en el estado characters con keys distintas
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id){
      setCharacters(
         characters.filter(char => {
            return char.id !== Number(id)
         })
      )
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} onRandom={onRandom} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
