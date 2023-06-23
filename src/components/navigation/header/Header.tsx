import { GoBack } from "./goBack/GoBack";
import { TmdbHeaderLogo } from "./tmdbHeaderLogo/TmdbHeaderLogo";

import styled from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styled.navbar}>
      <div className={styled.container}>
        <GoBack />
        <TmdbHeaderLogo />
      </div>
    </div>
  );
};
