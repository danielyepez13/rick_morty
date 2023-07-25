import Card from './Card';
import '../assets/Cards.css';

export default function Cards({characters, onClose}) {
   return <div className='cards'>
      {
         characters.map((caracter) => {
            return (
               <Card 
                  id={caracter.id}
                  key={caracter.id}
                  name={caracter.name}
                  status={caracter.status}
                  species={caracter.species}
                  gender={caracter.gender}
                  origin={caracter.origin.name}
                  image={caracter.image}
                  onClose={onClose}
               />
            );
         }
         )
      }
   </div>;
}
