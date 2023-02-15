import React from "react";
import iconToggle from "../../assets/icons/iconToggle.svg";
import logo from "../../assets/images/logo.svg";
import iconSearch from "../../assets/icons/iconSearch.svg";
import iconCart from "../../assets/icons/iconCart.svg";
import iconMoon from "../../assets/icons/iconMoon.svg";
import iconSun from "../../assets/icons/iconSun.svg";

const menuList = ["男款", "女款", "最新消息", "客製商品", "聯絡我們"];

const actionIconList = [
  { id: "search", source: iconSearch },
  { id: "cart", source: iconCart },
  { id: "moon", source: iconMoon },
  { id: "sun", source: iconSun },
];

function Header() {
  // 迴圈製造 menu list
  const listMenu = menuList.map((item) => (
    <li className="nav-item" key={item}>
      <a className="nav-link" href="#">
        {item}
      </a>
    </li>
  ));

  // 迴圈製造 action list
  const listAction = actionIconList.map((icon) => (
    <li className="nav-item" key={icon.id}>
      <img
        src={icon.source}
        alt={`${icon.id} icon`}
        className="nav-icon cursor-point"
      />
    </li>
  ));

  return (
    <>
      {/* <!-- header --> */}
      <header className="site-header">
        <div className="header-container mx-auto">
          {/* <!-- navbar-toggle --> */}
          <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
          <label htmlFor="navbar-toggle" className="burger-container">
            <img
              src={iconToggle}
              alt="iconToggle"
              className="icon-toggle cursor-point"
            />
          </label>

          {/* <!-- navbar-menu --> */}
          <nav className="navbar-menu">
            <ul className="nav-list site-menu-list mr-auto">{listMenu}</ul>

            <ul className="nav-list site-action-list">{listAction}</ul>
          </nav>

          {/* <!-- logo --> */}
          <a className="header-logo-container" href="#">
            <img src={logo} alt="logo" className="icon-logo cursor-point" />
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
