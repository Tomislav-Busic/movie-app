import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

import styled from "./navbar.module.scss";

enum NavItem {
  Home = "/",
  Favorites = "/favorites",
}

export const Navbar = () => {
  const [selected, setSelected] = useState<string>(NavItem.Home);
  let location = useLocation();

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  return (
    <div className={styled.footer}>
      <div className={styled.container}>
        <Link
          to={NavItem.Home}
          className={`${styled.frame} ${
            selected === NavItem.Home ? styled.active : ""
          }`}
          onClick={() => setSelected(NavItem.Home)}
        >
          {selected === NavItem.Home ? (
            <AiFillHome role="homeBlue" className={styled.icon} />
          ) : (
            <AiOutlineHome className={styled.icon__gray} />
          )}
          <p>Home</p>
        </Link>
        <Link
          to={NavItem.Favorites}
          className={`${styled.frame} ${
            selected === NavItem.Favorites ? styled.active : ""
          }`}
          onClick={() => setSelected(NavItem.Favorites)}
        >
          {selected === NavItem.Favorites ? (
            <MdFavorite role="favoriteBlue" className={styled.icon} />
          ) : (
            <MdOutlineFavoriteBorder className={styled.icon__gray} />
          )}
          <p>Favorites</p>
        </Link>
      </div>
    </div>
  );
};
