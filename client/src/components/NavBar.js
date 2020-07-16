import React, { useState, Fragment } from "react";
import { Navbar } from "react-bulma-components";
import { Link } from "react-router-dom";

function NavBar() {
  const [isActive, setActive] = useState({
    active: false,
  });
  // set active state for hamburger

  const handleClick = (active) => {
    if (isActive.active === false) {
      setActive({
        active: true,
      });
    } else {
      setActive({
        active: false,
      });
    }
  };

  const Links = (
    <Fragment>
      <Navbar.Menu>
        <Navbar.Container class="navbar-end">
          <Link onClick={handleClick} className={"navbar-item"} to="/">
            Leaderboard
          </Link>
          <Link onClick={handleClick} className={"navbar-item"} to="/inventory">
            Duel Arena
          </Link>
          <Link onClick={handleClick} className={"navbar-item"} to="/recipes">
            Duelist Network
          </Link>
          <Link onClick={handleClick} className={"navbar-item"} to="/sheets">
            Card Search
          </Link>
        </Navbar.Container>
      </Navbar.Menu>
    </Fragment>
  );

  return (
    <div id="header">
      <Navbar
        color="primary"
        fixed="top"
        active={isActive.active}
        style={{
          background:
            "linear-gradient(141deg, #ff8b21 0%, #fec255 71%, #ffe46e 100%)",
        }}
      >
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="/" className={"logo"}>
            Duelist Kingdom
          </Navbar.Item>

          <Navbar.Burger
            active={isActive.active.toString()}
            onClick={handleClick}
          />
        </Navbar.Brand>
        {Links}
      </Navbar>
    </div>
  );
}

export default NavBar;
