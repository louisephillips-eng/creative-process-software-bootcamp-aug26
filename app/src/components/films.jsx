
function Films(props) {

    // console.log('my props', props);
    return (
        <article className="films">
            {/* <img src={props.image} alt={props.title} /> */}

            <h2>{props.FilmTitle}</h2>
            <p><strong>Year:</strong> {props.FilmYear}</p>
            <p>{props.filmDescription}</p>
        </article>
    );
}

export default Films;