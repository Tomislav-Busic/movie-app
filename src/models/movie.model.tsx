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
}

interface ActorsProps {
  name: string;
  profession: string;
}
