import { useState, useEffect } from 'react';
import './App.css'
import SearchBox from '../components/searchBox/SearchBox';
import CardList from '../components/cardList/CardList';
import Footer from '../components/footer/Footer'


function App() {
  const [searchInput, setSearchInput] = useState('');
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(false);

  function updateSearchInput(event) {
    setSearchInput(event.target.value);
  }

  function filteredRobots(arr) {
    // do something to filter
    const newRobots = robots.filter(item => (
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    ));
    return newRobots;
  }

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      setRobots(json);
      setLoading(false);
    })
    .catch((err) => console.log(err))
  }, []);
  
  return (
    <div>
      <h1 style={{ textAlign: 'center'}}>KITTEN-FRIENDS (Functional base) </h1>
      
      <SearchBox updateSearchInput={updateSearchInput}/>
      {loading && <h2 style={{ textAlign: 'center'}}>Loading...</h2>}
      {!robots.length && !loading && <h3 style={{ textAlign: 'center'}}>No result found!!!</h3>}
      
      <CardList clients={filteredRobots(robots)}/>

      <Footer/>
    </div>
  )
}


export default App;