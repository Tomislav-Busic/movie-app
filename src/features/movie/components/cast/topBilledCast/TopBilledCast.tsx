import React from "react";

import { TopBilledCastProps } from "models/movie.model";

import style from "../cast.module.scss";

interface TopProps {
  topbc: TopBilledCastProps[];
}

export const TopBilledCast: React.FC<TopProps> = ({ topbc }) => {
  return (
    <div className={style.cards}>
      {topbc?.map((item, index) => (
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
