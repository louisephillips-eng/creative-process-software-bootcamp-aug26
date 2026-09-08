import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SiteHeader from "./components/SiteHeader.jsx";
import ProgrammeSummary from "./components/ProgrammeSummary.jsx";
import FilmCard from "./components/FilmCard.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import { clearSelectedIds, getInitialSelectedIds, saveSelectedIds } from "./storage.js";

const filmsUrl = `${import.meta.env.BASE_URL}data/films.json`;

function App() {
  const [films, setFilms] = useState([]);
  const [archiveStatus, setArchiveStatus] = useState("loading");
  const [selectedIds, setSelectedIds] = useState(getInitialSelectedIds);

  useEffect(() => {
    async function loadFilms() {
      try {
        const response = await fetch(filmsUrl);

        if (!response.ok) {
          throw new Error("The film archive could not be loaded.");
        }

        const loadedFilms = await response.json();
        setFilms(loadedFilms);
        setArchiveStatus("ready");
      } catch {
        setArchiveStatus("error");
      }
    }

    loadFilms();
  }, []);

  useEffect(() => {
    saveSelectedIds(selectedIds);
  }, [selectedIds]);

  function handleToggleSelect(id) {
    setSelectedIds(selectedIds.includes(id)
      ? selectedIds.filter((selectedId) => selectedId !== id)
      : [...selectedIds, id]);
  }

  function handleClearProgramme() {
    clearSelectedIds();
    setSelectedIds([]);
  }

  const selectedFilms = films.filter((film) => selectedIds.includes(film.id));
  let totalMinutes = 0;
  for (const film of selectedFilms) {
    totalMinutes += Math.round((film.runtimeSeconds ?? 0) / 60);
  }

  return (
    <>
      <SiteHeader />
      <main>
        <ProgrammeSummary count={selectedFilms.length} totalMinutes={totalMinutes} />
        <Routes>
          <Route path="/" element={<Archive films={films} status={archiveStatus} selectedIds={selectedIds} onToggleSelect={handleToggleSelect} />} />
          <Route path="/programme" element={<SavedProgramme films={selectedFilms} status={archiveStatus} onToggleSelect={handleToggleSelect} onClear={handleClearProgramme} />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}

function Archive({ films, status, selectedIds, onToggleSelect }) {
  if (status === "loading") {
    return <p className="archive-status">Loading the fictional archive…</p>;
  }

  if (status === "error") {
    return (
      <p className="archive-status archive-status--error">
        The fictional archive could not be loaded. Refresh the page to try
        again.
      </p>
    );
  }

  return (
    <section>
      <div className="section-heading">
        <div><p className="eyebrow">Connected fictional archive</p><h2>Choose from {films.length} short films</h2></div>
        <p>Combined programme target: 30–45 minutes</p>
      </div>
      <div className="film-grid">
        {films.map((film) => <FilmCard key={film.id} {...film} isSelected={selectedIds.includes(film.id)} onToggleSelect={onToggleSelect} />)}
      </div>
    </section>
  );
}

function SavedProgramme({ films, status, onToggleSelect, onClear }) {
  if (status === "loading") {
    return <p className="archive-status">Loading your programme…</p>;
  }

  if (status === "error") {
    return (
      <p className="archive-status archive-status--error">
        Your saved choices are safe, but the film archive could not be loaded.
      </p>
    );
  }

  return (
    <section>
      <div className="section-heading">
        <div><p className="eyebrow">Saved view</p><h2>Your programme</h2></div>
        {films.length > 0 && <button className="clear-button" type="button" onClick={onClear}>Clear programme</button>}
      </div>
      {films.length === 0 ? <p className="empty-message">Choose films from the archive to build a programme.</p> : (
        <div className="film-grid">{films.map((film) => <FilmCard key={film.id} {...film} isSelected={true} onToggleSelect={onToggleSelect} />)}</div>
      )}
    </section>
  );
}

export default App;
