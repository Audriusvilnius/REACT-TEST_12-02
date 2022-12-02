function Joke({ joke }) {
    return (
        <div
            style={{
                letterSpacing: '2px',
                fontSize: '12px',
                backgroundColor: '#282c34',
                color: 'white',
                textAlign: 'initial',
                padding: '20px',
                marginRight: '8%',
            }}
        >
            <ul>
                <ol>
                    <h2>{joke.joke}</h2>
                </ol>
                <ol>
                    <h2>{joke.setup}</h2>
                    <h2>{joke.delivery}</h2>
                </ol>
            </ul>
        </div>
    );
}

export default Joke;
