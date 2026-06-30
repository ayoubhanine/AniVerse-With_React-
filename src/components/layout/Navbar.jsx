import { NavLink } from "react-router-dom";




export default function Navbar() {
  return (
    <nav>
     <NavLink to="/">Home</NavLink>

      <NavLink to="/anime"> Anime</NavLink>

       <NavLink to="/characters">Characters</NavLink>

      <NavLink to="/favorites">Favorites</NavLink>

      <NavLink to="/my-library">Library</NavLink>

      <NavLink to="/dashboard">Dashboard</NavLink>


    </nav>
  );
}