import React, { useState } from "react";

import { MovieReviewsResults } from "models/movie/movieReviews.model";

import style from "./reviews.module.scss";

interface ReviewsProps {
  results: MovieReviewsResults[];
}

export const Reviews: React.FC<ReviewsProps> = ({ results }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className={style.container}>
      {results.map((review, index) => (
        <div className={style.element} key={index}>
          <div className={style.element_header}>
            <img src={review.url} alt="discussions-img" />
            <div className={style.title_date}>
              <h3>A review by {review.author_details.username}</h3>
              <p>
                Written by <span>{review.author_details.username}</span> on{" "}
                {review.created_at}
              </p>
            </div>
          </div>
          <p className={style.content}>
            {!toggle
              ? `${review.content.substring(0, 550)}. . .  `
              : `${review.content}  `}
            <span onClick={() => setToggle(!toggle)}>
              {!toggle ? "read the rest." : "read less."}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};
