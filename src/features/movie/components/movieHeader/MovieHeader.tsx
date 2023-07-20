import { MovieDetails } from "models/movie/movieDetails.model";

import { AiOutlineStar } from "react-icons/ai";

import styled from "./movieHeader.module.scss";

export const MovieHeader: React.FC<MovieDetails> = ({
  release_date,
  backdrop_path,
  runtime,
  genres,
  production_countries,
}) => {
  const genre = genres.join(", ");
  const countries = production_countries.join(", ");

  return (
    <div
      aria-roledescription="movieHeader"
      className={styled.img_container}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgb(0, 0, 0)), url(${backdrop_path})`,
      }}
    >
      <div className={styled.score_download}>
        <div className={styled.download_container}>
          <div className={styled.download}>
            75<span>%</span>
          </div>
        </div>
        <div className={styled.score}>User Score</div>
      </div>
      <div className={styled.details}>
        <div className={styled.year_country}>
          <div title="year" className={styled.year}>
            {release_date}
          </div>
          <div title="country" className={styled.country}>
            {countries}
          </div>
        </div>
        <div className={styled.genre_time}>
          <div title="genre" className={styled.genre}>
            {genre}
          </div>
          <div title="time" className={styled.time}>
            {runtime}
          </div>
        </div>
      </div>
      <div className={styled.fav_btn}>
        <AiOutlineStar className={styled.fav_icon} />
      </div>
    </div>
  );
};
