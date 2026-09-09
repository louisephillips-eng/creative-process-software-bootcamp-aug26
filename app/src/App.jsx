import "./App.css";
import { useState } from "react";
import  Header  from "./components/header";
import  NavBar  from "./components/navBar";
import  Bio   from "./components/bio";
import  Films  from "./components/films";
import films  from "./data/films.json";


function App() {

  const [searchTitle, setSearchTitle] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedRating, setSelectedRating] =useState("");
  const [selectedDirector, setSelectedDirector] = useState("");
  const [selectedActor, setSelectedActor] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");


  const filteredFilms = films.filter((film) => {
  const matchesSearch = film.title.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesGenre = selectedGenre === "" || film.genre === selectedGenre;
  const matchesYear = selectedYear === "" || film.year === Number(selectedYear);
  const matchesRating = selectedRating === "" || film.rating === selectedRating;
  const matchesDirector = selectedDirector === "" || film.director === selectedDirector;
  const matchesActor = selectedActor === "" || film.actor === selectedActor;
  const matchesLanguage = selectedLanguage === "" || film.language === selectedLanguage;


  return matchesSearch && matchesGenre && matchesYear && matchesRating && matchesDirector && matchesActor && matchesLanguage;
});

  return (
    <>
      <Header />
      <NavBar />
      <Bio /> 

      <div className="filters">
         <label>Film Title:</label>
        <input type ="text" 
          placeholder="Search by title..." 
          value={searchTerm} 
          onChange={(event) => setSearchTerm(event.target.value)} 
          />
        
      <label>Director:</label>
      <input type= "text"
        placeholder="Search by director..." 
        value={selectedDirector} 
        onChange={(event) => setSelectedDirector(event.target.value)} 
        />

      <label>Actor:</label>
      <input type= "text"
        placeholder="Search by actor..." 
        value={selectedActor} 
        onChange={(event) => setSelectedActor(event.target.value)} 
        />

      <label>Language:</label>
      <input type= "text"
        placeholder="Search by language..." 
        value={selectedLanguage} 
        onChange={(event) => setSelectedLanguage(event.target.value)} 
        />

      <label>Year:</label>
      <input type= "text"
        placeholder="Search by year..." 
        value={[selectedYear]} 
        onChange={(event) => setSelectedYear(event.target.value)} 
        />  
      
      <label>Rating:</label>
      <input type= "text"
        placeholder="Search by rating..." 
        value={selectedRating} 
        onChange={(event) => setSelectedRating(event.target.value)}
        />
      </div>

    
    {filteredFilms.map((film) => (
      <Films 
      key={film.title}
      FilmTitle={film.title}
      FilmGenre={film.genre}
      FilmYear={film.year}
      FilmRating={film.rating}
      FilmDirector={film.director}
      FilmActor={film.actor}
      FilmLanguage={film.language}
      filmDescription={film.synopsis}
      />  
    ))};
    


      <main>
        <h2>Meet the Director...</h2>

        <h3>
          <strong>Octavious Stone</strong>
        </h3>

        <p>
          Octavious Stone is an American film director, producer, and
          screenwriter known for his intense, visually striking films that
          often explore themes of power, corruption, and the human condition.
        </p>


      </main>

      <footer>
        <p>2026 Director's Profile. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;