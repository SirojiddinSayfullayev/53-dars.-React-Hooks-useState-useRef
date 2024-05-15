import React from "react";
import Navbar from "../../navbar/Navbar";

export default function Header() {
  const navbarData = [
    {
      id: 1,
      text: "About",
      path: "/about",
    },
    {
      id: 2,
      text: "Products",
      path: "/products",
    },
    {
      id: 3,
      text: "Contacts",
      path: "/contacts",
    },
  ];

  return (
    <div>
      <Navbar navMenuData={navbarData} author="Feruz Ramazonov" />
    </div>
  );
}
