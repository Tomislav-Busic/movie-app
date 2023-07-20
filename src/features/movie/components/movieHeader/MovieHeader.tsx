import { AiOutlineStar } from "react-icons/ai";

import styled from "./movieHeader.module.scss";

interface MovieHeaderProps {
  release_date: string;
  backdrop_path: string;
  runtime: number;
  genres: { id: number; name: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
}

export const MovieHeader: React.FC<MovieHeaderProps> = ({
  release_date,
  backdrop_path,
  runtime,
  genres,
  production_countries,
}) => {
  const formattedCountries =
    production_countries &&
    production_countries.map((country) => country.name).join(", ");

  const formattedGenres =
    genres && genres.map((genre) => genre.name).join(", ");

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
            {formattedCountries}
          </div>
        </div>
        <div className={styled.genre_time}>
          <div title="genre" className={styled.genre}>
            {formattedGenres}
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
