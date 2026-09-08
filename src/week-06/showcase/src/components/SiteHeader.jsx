import { NavLink } from "react-router-dom";

function SiteHeader() {
  return (
    <header className="site-header">
      <p className="eyebrow">Creative Processes Cinema</p>
      <h1>Short Film Programme Builder</h1>
      <nav aria-label="Primary navigation">
        <NavLink to="/">Archive</NavLink>
        <NavLink to="/programme">Saved programme</NavLink>
      </nav>
    </header>
  );
}

export default SiteHeader;
