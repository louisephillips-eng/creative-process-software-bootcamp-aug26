import { useState } from "react";

const [isSelected, setIsSelected] = useState(false);

const buttonLabel = isSelected ? "Remove from programme" : "Add to programme";

const handleClick = () => {
    console.log("am I selected?");
    setIsSelected(!isSelected);

function FilmCard(props) {
    return (
       <article className="film-card"> 
       <p className="film-meta"> 
        {props?.form} · {props.country} · {props.year} </p> 
        <h3>{props.title}</h3> 
       <p>{props.synopsis}</p>
         <button onClick={handleClick}>{buttonLabel}</button>
       </article>
       
    );
}}

export default FilmCard;


