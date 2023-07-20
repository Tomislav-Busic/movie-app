import { Cast } from "models/movie/movieCredits.model";

import styled from "./overview.module.scss";

interface OverviewProps {
  cast: Cast[];
  overview: string;
}

export const Overview: React.FunctionComponent<OverviewProps> = ({
  cast,
  overview,
}) => {
  return (
    <div className={styled.overview}>
      <h3>Overview</h3>
      <div title="description" className={styled.description}>
        {overview}
      </div>
      <div className={styled.actors}>
        {cast.map((actor, index) => (
          <div role="listitem" className={styled.actor} key={index}>
            <div className={styled.actor_name}>{actor.name}</div>
            <div className={styled.actor_profession}>
              {actor.known_for_department}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
