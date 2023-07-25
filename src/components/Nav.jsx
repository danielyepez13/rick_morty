import SearchBar from './SearchBar';
import '../assets/Nav.css';
export default function Nav({ onSearch, onRandom}) {
  return (
    <nav className='nav'>
        <SearchBar onSearch={onSearch} />
      <button onClick={onRandom} >Random</button>
    </nav>
  )
}
