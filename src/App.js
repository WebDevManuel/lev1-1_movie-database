import './App.css';
import MovieItem from "./components/MovieItem";
import movies from './data/movieDatabase';


function App() {
    return (
        <div className="App">
            {movies.map((elt) =>
                <MovieItem
                title={elt.title}
                    year={elt.year}
                    director={elt.director}
                    duration={elt.duration}
                    genre={elt.genre}
                    rate={elt.rate}
                />
            )}
        </div>
    );
};

export default App;
