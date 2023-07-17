import React, { useState } from "react";

import { DiscussionProps } from "models/movie.model";

import style from "./discussions.module.scss";

interface DiscussionsProps {
  discussions: DiscussionProps[];
}

export const Discussions: React.FC<DiscussionsProps> = ({ discussions }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className={style.container}>
      {discussions.map((discussion, index) => (
        <div role="listitem" className={style.element} key={index}>
          <div className={style.element_header}>
            <img src={discussion.image} alt="discussions-img" />
            <div className={style.title_date}>
              <h3>A discussion by {discussion.name}</h3>
              <p>
                Written by <span>{discussion.name}</span> on {discussion.date}
              </p>
            </div>
          </div>
          <p className={style.content}>
            {!toggle
              ? `${discussion.content.substring(0, 550)}. . .  `
              : `${discussion.content}  `}
            <span role="button" onClick={() => setToggle(!toggle)}>
              {!toggle ? "read the rest." : "read less."}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};
