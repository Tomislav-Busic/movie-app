import React from "react";

import { FullCastAndCrewProps } from "models/movie.model";

import style from "../cast.module.scss";

interface newProps {
  fullcac: FullCastAndCrewProps[];
}

export const FullCastAndCrew: React.FC<newProps> = ({ fullcac }) => {
  return (
    <div className={style.cards}>
      {fullcac?.map((item, index) => (
        <div role="listitem" className={style.card} key={index}>
          <div className={style.image}>
            <img src={item?.image} alt="actor-img" />
          </div>
          <div className={style.content}>
            <p className={style.actor}>{item?.actor}</p>
            <p className={style.assistants}>{item?.assistants.join(" / ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
