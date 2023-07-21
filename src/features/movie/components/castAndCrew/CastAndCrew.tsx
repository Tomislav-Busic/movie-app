import { useState } from "react";

import { Cast, Crew } from "models/movie/movieCredits.model";

import { FullCrew } from "./fullCrew/FullCrew";
import { TopBilledCast } from "./cast/TopBilledCast";

import style from "./cast.module.scss";

interface CastCrewTypes {
  cast: Cast[];
  crew: Crew[];
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
          Full Crew
        </button>
      </div>
      <div className={style.cast_container}>
        {showCast ? (
          <div title="cast">
            <TopBilledCast cast={cast} />
          </div>
        ) : (
          <div title="crew">
            <FullCrew crew={crew} />
          </div>
        )}
      </div>
    </div>
  );
};
