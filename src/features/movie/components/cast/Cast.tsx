import { useState } from "react";

import { MovieProps } from "models/movie.model";

import { FullCastAndCrew } from "./fullCast&Crew/FullCastAndCrew";
import { TopBilledCast } from "./topBilledCast/TopBilledCast";

import style from "./cast.module.scss";

export const Cast: React.FC<MovieProps> = ({ movie }) => {
  const [showTopBilledCast, setShowTopBilledCast] = useState<boolean>(true);
  const { top_billed_cast, full_cast_and_crew } = movie;

  return (
    <div className={style.cast}>
      <div className={style.cast_menu}>
        <button
          className={showTopBilledCast ? style.active : ""}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            setShowTopBilledCast(true)
          }
        >
          Top Billed Cast
        </button>
        <button
          className={!showTopBilledCast ? style.active : ""}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            setShowTopBilledCast(false)
          }
        >
          Full Cast & Crew
        </button>
      </div>
      <div className={style.cast_container}>
        {showTopBilledCast ? (
          <div title="topbc">
            <TopBilledCast topbc={top_billed_cast} />
          </div>
        ) : (
          <div title="fullcac">
            <FullCastAndCrew fullcac={full_cast_and_crew} />
          </div>
        )}
      </div>
    </div>
  );
};
