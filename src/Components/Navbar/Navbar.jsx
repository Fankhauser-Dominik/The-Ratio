import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";
import { ReactComponent as Logo } from "../../Assets/Images/logo.svg";
import { ReactComponent as SearchIcon } from "../../Assets/Icons/Search.svg";
import { ReactComponent as ShoppingBag } from "../../Assets/Icons/ShoppingBag.svg";
import { ReactComponent as HamburgerMenu } from "../../Assets/Icons/HamburgerMenu.svg";
import { ReactComponent as Triangle } from "../../Assets/Icons/Triangle.svg";
import { ReactComponent as ArrowDown } from "../../Assets/Icons/ArrowDown.svg";

export default function Navbar() {
  const ref = useRef();
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (IsMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [IsMenuOpen]);

  return (
    <nav>
      <NavLink end to="/">
        <Logo alt="The Ratio Logo" className="Logo" />
      </NavLink>
      <div className="Navigation">
        <NavLink
          end
          to="/"
          className={({ isActive }) => "NavLink" + (isActive ? " Active" : "")}
          onMouseOver={() => setIsMenuOpen(true)}
          onClick={() => setIsMenuOpen(!IsMenuOpen)}
        >
          Home
          <ArrowDown className="ArrowDown" />
          <Triangle className="Triangle" />
          {/* DropDownMenu */}
          <div
            className={
              IsMenuOpen ? " DropDownContent" : "DropDownContentHidden"
            }
            ref={ref}
            onMouseUp={() => setIsMenuOpen(false)}
          >
            <Link end to="/" className="Primary">
              <div className="Main">
                <div className="Divider"></div>
                Main Home
              </div>
            </Link>
            <Link end to="/" className="Secondary">
              Interior Design
            </Link>
            <Link end to="/" className="Secondary">
              Studio Home
            </Link>
            <Link end to="/" className="Secondary">
              Architecture Agency
            </Link>
            <Link end to="/" className="Secondary">
              Design Company
            </Link>
            <Link end to="/" className="Secondary">
              Home Video
            </Link>
            <Link end to="/" className="Secondary">
              Home Full Screen
            </Link>
            <Link end to="/" className="Secondary">
              Home One Page
            </Link>
            <Link end to="/" className="Secondary">
              Home with Side Menu
            </Link>
          </div>
        </NavLink>
        <NavLink
          end
          to="pages"
          className={({ isActive }) => "NavLink" + (isActive ? " Active" : "")}
        >
          Pages
          <ArrowDown className="ArrowDown" />
          <Triangle className="Triangle" />
        </NavLink>
        <NavLink
          end
          to="services"
          className={({ isActive }) => "NavLink" + (isActive ? " Active" : "")}
        >
          Services
          <ArrowDown className="ArrowDown" />
          <Triangle className="Triangle" />
        </NavLink>
        <NavLink
          end
          to="portfolio"
          className={({ isActive }) => "NavLink" + (isActive ? " Active" : "")}
        >
          Portfolio
          <ArrowDown className="ArrowDown" />
          <Triangle className="Triangle" />
        </NavLink>
        <NavLink
          end
          to="blog"
          className={({ isActive }) => "NavLink" + (isActive ? " Active" : "")}
        >
          Blog
          <ArrowDown className="ArrowDown" />
          <Triangle className="Triangle" />
        </NavLink>
        <NavLink
          to="contacts"
          className={({ isActive }) => "NavLink" + (isActive ? " Active" : "")}
        >
          Contacts
          <Triangle className="Triangle NoArrow" />
        </NavLink>
      </div>

      <div className="RightMenu">
        <div className="LeftIcons">
          <div>
            <ShoppingBag className="Icons" />
            <span className="Badge">2</span>
          </div>
          <SearchIcon className="Icons" />
        </div>
        <div className="HamburgerMenu">
          <HamburgerMenu className="Icons" />
        </div>
      </div>
    </nav>
  );
}
