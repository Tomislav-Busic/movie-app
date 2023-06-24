import { Favorites } from "features/favorites/Favorites";

import styled from "./pages.module.scss";

export const FavoritesPage = () => {
  return (
    <div className={styled.page}>
      <Favorites />
    </div>
  );
};
