import { useState } from "react";

import { CastCrew } from "models/movie/movieCredits.model";

import { FullCastAndCrew } from "./fullCast&Crew/FullCastAndCrew";
import { TopBilledCast } from "./topBilledCast/TopBilledCast";

import style from "./cast.module.scss";

interface CastCrewTypes {
  cast: CastCrew[];
  crew: CastCrew[];
}

export const CastAndCrew: React.FC<CastCrewTypes> = ({ cast, crew }) => {
  const [showCast, setShowCast] = useState<boolean>(true);

  return (
    <div className={style.cast}>
      <div className={style.cast_menu}>
        <button
          className={showCast ? style.active : ""}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            setShowCast(true)
          }
        >
          Top Billed Cast
        </button>
        <button
          className={!showCast ? style.active : ""}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            setShowCast(false)
          }
        >
          Full Cast & Crew
        </button>
      </div>
      <div className={style.cast_container}>
        {showCast ? (
          <div title="topbc">
            <TopBilledCast topbc={cast} />
          </div>
        ) : (
          <div title="fullcac">
            <FullCastAndCrew fullcac={crew} />
          </div>
        )}
      </div>
    </div>
  );
};
