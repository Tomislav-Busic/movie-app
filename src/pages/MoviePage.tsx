import { Movie } from "features/movie/Movie";

import styled from "./pages.module.scss";

export const MoviePage = () => {
  return (
    <div className={styled.page}>
      <Movie />
    </div>
  );
};
