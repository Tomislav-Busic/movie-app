import React, { useState } from "react";

import { DiscussionProps } from "models/movie.model";

import style from "./reviews.module.scss";

interface DiscussionsProps {
  reviews: DiscussionProps[];
}

export const Reviews: React.FC<DiscussionsProps> = ({ reviews }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className={style.container}>
      {reviews.map((review, index) => (
        <div className={style.element} key={index}>
          <div className={style.element_header}>
            <img src={review.image} alt="discussions-img" />
            <div className={style.title_date}>
              <h3>A review by {review.name}</h3>
              <p>
                Written by <span>{review.name}</span> on {review.date}
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
