import React from "react";

/*
  Header Component
  Displays the blog name passed from App via props
*/

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;