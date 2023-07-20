import { movieDetails } from "fakeData/movieDetails";
import { MovieHeader } from "./components/movieHeader/MovieHeader";
import { Overview } from "./components/overview/Overview";
import { Cast } from "./components/cast/Cast";
import { Social } from "./components/social/Social";

export const Movie = () => {
  return (
    <div key={movieDetails.id}>
      <MovieHeader
        release_date={movieDetails.release_date}
        production_countries={movieDetails.production_countries}
        genres={movieDetails.genres}
        runtime={movieDetails.runtime}
        backdrop_path={movieDetails.backdrop_path}
      />
      {/* <Overview movie={movie} />
      <Cast movie={movie} />
      <Social movie={movie} /> */}
    </div>
  );
};
