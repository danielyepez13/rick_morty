import SearchBar from './SearchBar';
import '../assets/Nav.css';
export default function Nav({ onSearch, onRandom}) {
  return (
    <nav className='nav'>
      <div className='contenedor-nav'>
        <SearchBar onSearch={onSearch} />
        <button onClick={onRandom} className='random'>Random</button>
      </div>
    </nav>
  )
}
