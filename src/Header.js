import React from "react";

function Header(props) {
  return (
    <header>
      <h1 className="site__title">{props.title}</h1>
      <span className="site__tagline">{props.tagline}</span>
    </header>
  );
}

export default Header;
