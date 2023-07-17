import { movie } from "fakeData/data";
import { MovieHeader } from "./components/movieHeader/MovieHeader";
import { Overview } from "./components/overview/Overview";
import { Cast } from "./components/cast/Cast";
import { Social } from "./components/social/Social";

export const Movie = () => {
  return (
    <div key={movie.id}>
      <MovieHeader movie={movie} />
      <Overview movie={movie} />
      <Cast movie={movie} />
      <Social movie={movie} />
    </div>
  );
};
