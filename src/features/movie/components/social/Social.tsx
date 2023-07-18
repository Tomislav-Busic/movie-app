import { useState } from "react";

import { MovieProps } from "models/movie.model";

import { Discussions } from "./discussions/Discussions";
import { Reviews } from "./reviews/Reviews";

import style from "./social.module.scss";

export const Social: React.FC<MovieProps> = ({ movie }) => {
  const [active, setActive] = useState<boolean>(true);
  const { reviews, discussions } = movie;

  return (
    <div className={style.social}>
      <h3>Social</h3>
      <div className={style.buttons}>
        <div className={style.btn_container}>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              setActive(true)
            }
          >
            Reviews ({reviews.length})
          </button>
          {active && <span></span>}
        </div>
        <div className={style.btn_container}>
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              setActive(false)
            }
          >
            Discussions ({discussions.length})
          </button>
          {!active && <span></span>}
        </div>
      </div>
      <div className={style.social_container}>
        {active ? (
          <div title="reviews">
            <Reviews reviews={reviews} />
          </div>
        ) : (
          <div title="discussions">
            <Discussions discussions={discussions} />
          </div>
        )}
      </div>
    </div>
  );
};
