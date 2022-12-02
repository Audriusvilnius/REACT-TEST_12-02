import { useEffect, useState } from 'react';
import Joke from './Components/Joke';

export default function App() {
    const [jokes, setJokes] = useState(null);
    useEffect(() => {
        fetch('https://v2.jokeapi.dev/joke/Programming?amount=10')
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setJokes(result.jokes);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {}
            );
    }, []);
    return (
        <div className="App">
            <div className="App-header ">


                    {jokes?.map((item) => (
                        <Joke key={item.id} joke={item} />
                    ))}
 
             
            </div>
        </div>
    );
}
