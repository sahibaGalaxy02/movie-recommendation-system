import "./Navbar.css";
import type { Dispatch, SetStateAction } from "react";
import { FaBars, FaSearch } from "react-icons/fa";

interface NavbarProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<string>>;
}

export default function Navbar({ setOpen, setSearch }: NavbarProps) {

  return (
    <div className="navbar">

      {/* MENU BUTTON */}
      <button
        className="menu-btn"
        onClick={() => setOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        <FaBars size={18} />
      </button>

      {/* LOGO */}
      <h1 className="logo">Cine<span>Hub</span></h1>

      {/* SEARCH */}
      <div className="search-wrap">
        <FaSearch size={13} />
        <input
          className="search"
          placeholder="Search movies..."
          aria-label="Search movies"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

    </div>
  );
}
