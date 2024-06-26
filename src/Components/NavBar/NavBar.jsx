import { useState } from "react";
import Link from "../Link/Link";
import { CgMenu, CgClose } from "react-icons/cg";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/contact", name: "Contact" },
  ];

  return (
    <nav className="bg-yellow-200 text-black px-6 ">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <CgClose className="text-2xl" />
        ) : (
          <CgMenu className="text-2xl" />
        )}
      </div>
      <ul
        className={`md:flex bg-yellow-200 text-black md:static absolute ${
          open ? "top-16" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
