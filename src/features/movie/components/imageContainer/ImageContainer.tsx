import { MovieProps } from "../../../../models/movie.model";

import { AiOutlineStar } from "react-icons/ai";
import imgIron from "../../../../assets/images/iron.jpg";

import styled from "./imageContainer.module.scss";

export const ImageContainer: React.FC<MovieProps> = (movie) => {
  const { year, country, genre, time, image } = movie;
  return (
    <div
      className={styled.img_container}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgb(0, 0, 0)),
         url(${imgIron})`, // here wil be place for the image
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
          <div className={styled.country}>({country})</div>
        </div>
        <div className={styled.genre_time}>
          <div className={styled.genre}>
            {genre.map((item) => item).join(", ")}
          </div>
          <div className={styled.time}>{time}</div>
        </div>
      </div>
      <div className={styled.fav_btn}>
        <AiOutlineStar className={styled.fav_icon} />
      </div>
    </div>
  );
};
