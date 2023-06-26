import { MovieProps } from "models/movie.model";

import styled from "./overview.module.scss";

export const Overview: React.FunctionComponent<MovieProps> = ({ movie }) => {
  const { description, actors } = movie;

  return (
    <div className={styled.overview}>
      <h3>Overview</h3>
      <div title="description" className={styled.description}>
        {description}
      </div>
      <div className={styled.actors}>
        {actors.map((actor, index) => (
          <div role="listitem" className={styled.actor} key={index}>
            <div className={styled.actor_name}>{actor.name}</div>
            <div className={styled.actor_profession}>{actor.profession}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
