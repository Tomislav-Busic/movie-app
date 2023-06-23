import logo from "../../../../assets/images/TMDB-Logo.png";

import styled from "./tmdbHeaderLogo.module.scss";

export const TmdbHeaderLogo = () => {
  return (
    <div className={styled.logo}>
      <img src={logo} alt="logo" />
    </div>
  );
};
