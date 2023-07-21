import React from "react";

import { Cast } from "models/movie/movieCredits.model";

import style from "../cast.module.scss";

interface CastCrewTypes {
  cast: Cast[];
}

export const TopBilledCast: React.FC<CastCrewTypes> = ({ cast }) => {
  return (
    <div className={style.cards}>
      {cast?.map((item, index) => (
        <div role="listitem" className={style.card} key={index}>
          <div className={style.image}>
            <img
              src={item?.profile_path ? item.profile_path : ""}
              alt="actor-img"
            />
          </div>
          <div className={style.content}>
            <p className={style.actor}>{item?.original_name}</p>
            <p className={style.known_for_department}>
              {item?.known_for_department}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
