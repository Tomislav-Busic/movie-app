import React, { useState } from "react";

import { MovieReviewsResults } from "models/movie/movieReviews.model";

import style from "./reviews.module.scss";

interface ReviewsProps {
  results: MovieReviewsResults[];
}

export const Reviews: React.FC<ReviewsProps> = ({ results }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const dateFormat = (time: string) => {
    const date = new Date(time);
    const formattedDate = date.toLocaleString();
    return formattedDate;
  };

  const removeFirstForwardSlash = (imgPath: string) => {
    const path = imgPath?.substring(1);
    return path;
  };

  return (
    <div className={style.container}>
      {results &&
        results.map((review, index) => (
          <div className={style.element} key={index}>
            <div className={style.element_header}>
              <img
                src={removeFirstForwardSlash(
                  review?.author_details.avatar_path as string
                )}
                alt="avatar"
              />
              <div className={style.title_date}>
                <h3>A review by {review.author}</h3>
                <p>
                  Written by <span>{review.author_details.username}</span> on{" "}
                  <br />
                  {dateFormat(review.created_at)}
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
