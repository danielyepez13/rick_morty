import Card from './Card';

export default function Cards(props) {
   // const caracteres = props.map((caracter) => );
   // console.log(props.characters);
   return <div>
      {
         props.characters.map((caracter) => {
            return (
               <Card key={caracter.id}
                  name={caracter.name}
                  status={caracter.status}
                  species={caracter.species}
                  gender={caracter.gender}
                  origin={caracter.origin.name}
                  image={caracter.image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            );
         }
         )
      }
   </div>;
}
