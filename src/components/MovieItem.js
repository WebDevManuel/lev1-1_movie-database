const MovieItem = (props) => {
    return (
        <div className="card">
            <h3>{props.title}</h3>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            {props.genre.map((elt) => <p>{elt}</p>)}
            <p>{props.rate}</p>
        </div>
    );
}

export default MovieItem;