import '../assets/Card.css';

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div>
         {
            <div className='card'>
               <button onClick={() => onClose(id)} className='buttonClose'>X</button>
               <h2 className='nombre'>{name} </h2>
               {/* <h2 className='status'>{status}</h2>   */}
               <div className='spe-gen'>
                  <h2 className='species'>{species}</h2>
                  <h2 className='gender'>{gender}</h2>
               </div>
               {/* <h2 className='origin'>{origin}</h2> */}
               <img src={image} alt='' className='image' width='200px' height='300px' />
            </div>
         }
      </div>
   );
}
