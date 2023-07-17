import { movie } from "root/data";
import { MovieHeader } from "./components/movieHeader/MovieHeader";
import { Overview } from "./components/overview/Overview";

export const Movie = () => {
  return (
    <div key={movie.id}>
      <MovieHeader movie={movie} />
      <Overview movie={movie} />
    </div>
  );
};
