
function Films(props) {

    // console.log('my props', props);
    return (
        <article className="films">
            {/* <img src={props.image} alt={props.title} /> */}

            <h2>{props.FilmTitle}</h2>
            <p><strong>Year:</strong> {props.FilmYear}</p>
            <p><strong>Genre:</strong> {props.FilmGenres}</p>
            <p><strong>Themes:</strong> {props.FilmThemes}</p>
            <p><strong>Published:</strong> {props.FilmPublished}</p>
            <p><strong>Runtime (seconds):</strong> {props.FilmRuntimeSeconds}</p>
            <p><strong>Editorial Type:</strong> {props.FilmEditorialType}</p>
            <p><strong>Synopsis:</strong> {props.FilmSynopsis}</p>

        </article>
    );
}

export default Films;