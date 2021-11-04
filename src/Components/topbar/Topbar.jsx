import React, { useState } from "react";
import "./Topbar.css";
import { MenuList } from "./MenuList";
import { Link } from "react-router-dom";
function Topbar() {
  const [clicked, setClicked] = useState(false);

  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <Link to={url}>{title}</Link>
      </li>
    );
  });
  const clickhandle = () => {
    setClicked(!clicked);
  };
  return (
    <div className="navbar">
      <h2 className="logo">
        {" "}
        SHOPPING <font>ERROR</font>{" "}
      </h2>
      <div className="menuIcon" onClick={clickhandle}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}> </i>
      </div>
      <ul className={clicked ? "menuList" : "menuList close"}>{menuList}</ul>
    </div>
  );
}

export default Topbar;
