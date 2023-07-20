import React from "react";

import { Crew } from "models/movie/movieCredits.model";

import style from "../cast.module.scss";

interface newProps {
  crew: Crew[];
}

export const FullCrew: React.FC<newProps> = ({ crew }) => {
  return (
    <div className={style.cards}>
      {crew?.map((item, index) => (
        <div role="listitem" className={style.card} key={index}>
          <div className={style.image}>
            <img
              src={item?.profile_path ? item.profile_path : ""}
              alt="actor-img"
            />
          </div>
          <div className={style.content}>
            <p className={style.actor}>{item?.name}</p>
            <p className={style.assistants}>{item?.job}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
