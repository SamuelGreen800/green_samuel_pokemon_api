import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';



  const App = (props) => {
    const [pokes, setPokes] = useState([]);

    useEffect(() => {
        axios
          .get('https://pokeapi.co/api/v2/pokemon-species/?limit=808&offset=01')
            .then(response => {setPokes(response.data.results)})
    }, []);

    return (
        <div>
          <h1>Hello!</h1>
            {pokes.length > 0 && pokes.map((pokes, index)=>{
                return (<ul key={index}><li>{pokes.name}</li></ul>)
            })}
        </div>
    );
}


export default App;
