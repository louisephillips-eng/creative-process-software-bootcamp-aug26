import "./App.css";
import { useState } from "react";
import  Header  from "./components/header";
import  NavBar  from "./components/navBar";
import  Bio   from "./components/bio";
import  Films  from "./components/films";
import films  from "./data/films.json";


function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenres, setSelectedGenres] = useState("");
  const [selectedRuntimeSeconds, setSelectedRuntimeSeconds] = useState("");
  const [selectedThemes, setSelectedThemes] = useState("");
  const [selectedPublished, setSelectedPublished] = useState("");
  const [selectedEditorialType, setSelectedEditorialType] = useState("");
  const [selectedSynopsis, setSelectedSynopsis] = useState("");


  const filteredFilms = films.filter((film) => {
    const matchesSearch = 
      film.title.toLowerCase().includes(searchTerm.toLowerCase());
  
    const matchesGenre = 
      selectedGenres === "" || 
      film.genres.some((genre) => 
        genre.toLowerCase().includes(selectedGenres.toLowerCase()));

    const matchesRuntimeSeconds = 
      selectedRuntimeSeconds === "" || 
      (film.runtimeSeconds !== null &&
      film.runtimeSeconds.toString().includes(selectedRuntimeSeconds));

    const matchesThemes = 
      selectedThemes === "" || 
      film.themes.some((theme) => 
      theme.toLowerCase().includes(selectedThemes.toLowerCase()));

    const matchesPublished = 
      selectedPublished === "" || 
      film.published.toString().includes(selectedPublished);

    const matchesEditorialType =
      selectedEditorialType === "" ||  
      film.editorialType.toLowerCase().includes(selectedEditorialType.toLowerCase());
      
    const matchesSynopsis = 
      selectedSynopsis === "" || 
      film.synopsis?.toLowerCase().includes(selectedSynopsis.toLowerCase());


  return matchesSearch && matchesGenre && matchesRuntimeSeconds && matchesThemes && matchesPublished && matchesEditorialType && matchesSynopsis;
});

  return (
    <>
      <Header />
      <NavBar />


      <Bio /> 
      <section className="film-search">
      <h2><span className="search-icon">🔍</span> Film Search</h2>
      
      <div className="filters">

         <div className="filter-group">
           <label htmlFor="film-title">Film Title:</label>
           <input 
             id="title"
             type="text" 
             placeholder="Search by title..." 
             value={searchTerm} 
             onChange={(event) => setSearchTerm(event.target.value)} 
          />
          </div>
          
          <div className="filter-group">
           <label htmlFor="film-Genre">Genre:</label>
           <input 
             id="genre"
             type= "text"
             placeholder="Search by genre..." 
             value={selectedGenres} 
             onChange={(event) => setSelectedGenres(event.target.value)} 
          />
         </div>
        
        <div className="filter-group">
          <label htmlFor="film-Themes">Themes:</label>
          <input 
            id="themes"
            type= "text"
            placeholder="Search by themes..." 
            value={selectedThemes} 
            onChange={(event) => setSelectedThemes(event.target.value)} 
        />
        </div>

        <div className="filter-group">
          <label htmlFor="editorial-type">Editorial Type:</label>
          <input 
            id="editorial-type"
            type="text"
            placeholder="Search by editorial type..." 
            value={selectedEditorialType} 
            onChange={(event) => setSelectedEditorialType(event.target.value)} 
          />
        </div>
    

       <div className="filter-group">
        <label htmlFor="film-runtimeSeconds">Runtime (seconds):</label>
        <input 
          id="runtimeSeconds"
          type= "text"
          placeholder="Search by runtime..." 
          value={selectedRuntimeSeconds} 
          onChange={(event) => setSelectedRuntimeSeconds(event.target.value)} 
        />  
       </div>

       <div className="filter-group">
        <label htmlFor="film-Synopsis">Synopsis:</label>
        <input 
          id="synopsis"
          type= "text"
          placeholder="Search by synopsis..." 
          value={selectedSynopsis} 
          onChange={(event) => setSelectedSynopsis(event.target.value)}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="film-published">Published:</label>
          <input 
            id="published"
            type="text"
            placeholder="Search by year..." 
            value={selectedPublished} 
            onChange={(event) => setSelectedPublished(event.target.value)}
         />
       </div>
    </div>
  </section>
    
    {searchTerm ||
    selectedGenres ||
    selectedRuntimeSeconds ||
    selectedThemes ||
    selectedPublished ||
    selectedEditorialType ||
    selectedSynopsis ? filteredFilms.length > 0 ? filteredFilms.map((film) => (
      <Films 
      key={film.id}
      FilmTitle={film.title}
      FilmGenres={film.genres}
      FilmYear={film.year}
      FilmThemes={film.themes}
      FilmRuntimeSeconds={film.runtimeSeconds}
      FilmPublished={film.published}
      FilmEditorialType={film.editorialType}
      FilmSynopsis={film.synopsis}
      />  
    ))
   : 
    <p className="no-results">No films match your search criteria.</p>
  
 : (
  <p>Use the search fields above to find a film.</p>
)}
    


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