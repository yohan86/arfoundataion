import { useState } from "react";
import { NavLink } from "react-router-dom";
 interface NavbarProps{
  menuIcon:boolean;
 }
const  NavBar=({menuIcon}:NavbarProps)=> {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const ToggleMenu = ()=> {
    setActiveMenu(!activeMenu);
  };

  return (
    <nav className={activeMenu ? "main-menu active": "main-menu"} onClick={()=>ToggleMenu()}>
      <div className="menu-wrapper relative h-0 overflow-hidden md:h-auto">
        <ul className="flex flex-col gap-4 px-3 py-5 items-end uppercase md:px-5 lg:flex-row lg:gap-4 lg:p-0">
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/Contact-us">Contact Us</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
        </ul>
      </div>
      {menuIcon && (
        <div className="menu-toggle absolute top-[-32px] right-3">
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </div>
      )}
      
    </nav>
  )
}

export default NavBar;