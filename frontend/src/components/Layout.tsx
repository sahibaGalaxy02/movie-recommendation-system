import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar setOpen={setOpen} setSearch={setSearch} />

      <Sidebar open={open} setOpen={setOpen} />

      {/* Tap-to-close overlay behind the sidebar drawer */}
      <div
        className={`sidebar-backdrop ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div className="main-content">
        <Outlet context={{ search }} />
        <Footer />
      </div>
    </>
  );
}
