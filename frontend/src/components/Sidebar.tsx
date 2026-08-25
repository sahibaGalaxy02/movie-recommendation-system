import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { FaHome, FaHeart, FaCheckCircle } from "react-icons/fa";

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
 return (
  <div className={`sidebar ${open ? "open" : ""}`}>
    <h2 className="sidebar-brand">CineHub</h2>

    <nav>
      <NavLink to="/" className="menu-item" onClick={() => setOpen(false)}>
        <FaHome className="icon" />
        <span>Home</span>
      </NavLink>

      <NavLink to="/watchlist" className="menu-item" onClick={() => setOpen(false)}>
        <FaHeart className="icon" />
        <span>Saved Movies</span>
      </NavLink>

      <NavLink to="/watched" className="menu-item" onClick={() => setOpen(false)}>
        <FaCheckCircle className="icon" />
        <span>Watched</span>
      </NavLink>
    </nav>
  </div>

  );
}