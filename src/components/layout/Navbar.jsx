
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bell, Moon, Search, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Anime", path: "/anime" },
  { name: "Characters", path: "/characters" },
  { name: "Favorites", path: "/favorites" },
  { name: "My Library", path: "/my-library" },
  { name: "Dashboard", path: "/dashboard" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
   
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Ani<span className="text-violet-500">Verse</span>
        </h1>

       
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2">
            <Search size={16} className="text-slate-400" />

            <input
              type="text"
              placeholder="Search anime..."
              className="w-44 bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
            />
          </div>

          <button className="rounded-full border border-slate-700 bg-slate-900/60 p-2 text-slate-300 hover:text-white">
            <Bell size={18} />
          </button>

          {/* <button className="rounded-full border border-slate-700 bg-slate-900/60 p-2 text-slate-300 hover:text-white">
            <Moon size={18} />
          </button> */}
        </div>

       
        <div className="hidden items-center gap-3 md:flex lg:hidden">
          <button className="rounded-full border border-slate-700 bg-slate-900/60 p-2 text-slate-300">
            <Search size={18} />
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full border border-slate-700 bg-slate-900/60 p-2 text-white"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

    
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-slate-700 bg-slate-900/60 p-2 text-white md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

     
      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950 lg:hidden">
          <ul className="flex flex-col gap-5 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-base ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <div className="mt-3 flex items-center gap-3">
              <button className="rounded-full border border-slate-700 bg-slate-900/60 p-2 text-slate-300">
                <Bell size={18} />
              </button>

              <button className="rounded-full border border-slate-700 bg-slate-900/60 p-2 text-slate-300">
                <Moon size={18} />
              </button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
