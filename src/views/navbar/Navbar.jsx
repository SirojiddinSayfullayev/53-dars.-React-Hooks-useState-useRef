import React from "react";

export default function Navbar(props) {
  // props.navMenuData    1-usul 
  //   const menuData = props.navMenuData    2-usul
  const { navMenuData, author } = props;   //  3-usul

  return (
    <div className="nav">
      <a className="nav_logo" href="#">
        Logo
      </a>
      <ul className="nav_menu">
        {navMenuData.map((menu) => {
          return (
            <li key={menu.id} className="nav_menu_item">
              {menu.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
