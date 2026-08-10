import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar setOpen={setOpen} setSearch={setSearch} />

      <Sidebar open={open} setOpen={setOpen} />

      <div className="main-content">
        <Outlet context={{ search }} />
      </div>
    </>
  );
}
