import './App.scss';
import { useState } from 'react';
import { useEffect } from 'react';
// import axios from 'axios';
import Joke from './Components/Joke';

function App() {

const [jokes, setJoke] = useState(null);

useEffect(() => {
    // axios
    //     .get('https://in3.dev/knygos/')
    //     .get('https://v2.jokeapi.dev/joke/Programming?amount=10')
    //     .then((res) => setJoke(res.data.map((b) => ({ ...b, show: true }))));
 
 fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
     .then((response) => response.json())
     .then((res) => setJoke(res.data.map((b) => ({ ...b, show: true }))));
         
}, []);

return (
    <div className="App">
        <div className="App-header">
            <ul>
                {jokes?.map((b) =>
                    b.show === true ? (
                        <Joke key={b.id} jokes={b.category} />
                    ) : null
                )}
            </ul>
        </div>
    </div>
);
}

export default App;