import { NavLink } from "react-router-dom";

const  NavBar=()=> {
    const navLinks = [
        {name:"Home", path:"/"},
        {name:"About", path:"/About"},
        {name:"Blog", path:"/Blog"},
    ];

  return (
    <nav className="flex items-end mb-5">
  
    </nav>
  )
}

export default NavBar;