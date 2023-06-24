import { Movie } from "models/movie.model";

import { AiOutlineStar } from "react-icons/ai";

import styled from "./movieHeader.module.scss";

export const MovieHeader: React.FC<Movie> = (movie) => {
  const { year, country, genre, time, image } = movie;

  const genres = genre.join(", ");

  return (
    <div
      className={styled.img_container}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgb(0, 0, 0))`,
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
          <div className={styled.year}>{year}</div>
          <div role="document" className={styled.country}>
            {country}
          </div>
        </div>
        <div className={styled.genre_time}>
          <div className={styled.genre}>{genres}</div>
          <div className={styled.time}>{time}</div>
        </div>
      </div>
      <div className={styled.fav_btn}>
        <AiOutlineStar className={styled.fav_icon} />
      </div>
    </div>
  );
};
