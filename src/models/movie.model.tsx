export interface MovieProps {
  movie: Movie;
}

export interface Movie {
  id: string;
  title: string;
  year: string;
  country: string;
  genre: string[];
  time: string;
  image: string;
  description: string;
  actors: ActorsProps[];
  top_billed_cast: TopBilledCastProps[];
  full_cast_and_crew: FullCastAndCrewProps[];
  reviews: ReviewProps[];
  discussions: DiscussionProps[];
}

interface ActorsProps {
  name: string;
  profession: string;
}

export interface TopBilledCastProps {
  image: string;
  actor: string;
  assistants: string[];
}

export interface FullCastAndCrewProps {
  image: string;
  actor: string;
  assistants: string[];
}

export interface ReviewProps {
  name: string;
  date: string;
  image: string;
  content: string;
}

export interface DiscussionProps {
  name: string;
  date: string;
  image: string;
  content: string;
}
