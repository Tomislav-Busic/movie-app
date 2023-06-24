import { Movie } from "models/movie.model";

import styled from "./overview.module.scss";

export const Overview: React.FunctionComponent<Movie> = (movie) => {
  const { description, actors } = movie;

  return (
    <div className={styled.overview}>
      <h3>Overview</h3>
      <div role="document" className={styled.description}>
        {description}
      </div>
      <div className={styled.actors}>
        {actors.map((actor) => {
          return (
            <div className={styled.actor}>
              <div className={styled.actor_name}>{actor.name}</div>
              <div className={styled.actor_profession}>{actor.profession}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
