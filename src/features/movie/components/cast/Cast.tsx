import { useState } from "react";

import { MovieProps } from "models/movie.model";

import { FullCastAndCrew } from "./fullCast&Crew/FullCastAndCrew";
import { TopBilledCast } from "./topBilledCast/TopBilledCast";

import style from "./cast.module.scss";

export const Cast: React.FC<MovieProps> = ({ movie }) => {
  const [active, setActive] = useState<boolean>(true);
  const { top_billed_cast, full_cast_and_crew } = movie;

  return (
    <div className={style.cast}>
      <div className={style.cast_menu}>
        <button
          className={active ? style.active : ""}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            setActive(true)
          }
        >
          Top Billed Cast
        </button>
        <button
          className={active ? "" : style.active}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            setActive(false)
          }
        >
          Full Cast & Crew
        </button>
      </div>
      <div className={style.cast_container}>
        {active ? (
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
