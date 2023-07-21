import { MovieReviewsResults } from "models/movie/movieReviews.model";

import { Reviews } from "./reviews/Reviews";

import style from "./social.module.scss";

interface MovieReviews {
  results: MovieReviewsResults[];
}

export const Social: React.FC<MovieReviews> = ({ results }) => {
  return (
    <div className={style.social}>
      <h2>Social</h2>
      <h3>Reviews</h3>
      <div className={style.social_container}>
        <Reviews results={results} />
      </div>
    </div>
  );
};
