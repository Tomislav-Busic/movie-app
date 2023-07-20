import { movieDetails } from "fakeData/movieDetails";
import { movieCredits } from "fakeData/movieCredits";

import { MovieHeader } from "./components/movieHeader/MovieHeader";
import { Overview } from "./components/overview/Overview";
import { CastAndCrew } from "./components/castAndCrew/CastAndCrew";
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
      <Overview overview={movieDetails.overview} cast={movieCredits.cast} />
      <CastAndCrew cast={movieCredits.cast} crew={movieCredits.crew} />
      {/* <Social movie={movie} /> */}
    </div>
  );
};
