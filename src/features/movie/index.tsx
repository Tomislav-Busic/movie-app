import { MovieProps } from "../../models/movie.model";

import { ImageContainer } from "./components/imageContainer/ImageContainer";

export const Movie = () => {
  const movie = {
    id: "1",
    title: "Iron Man",
    year: "05/02/2008",
    country: "US",
    genre: ["Action", "Science Fiction", "Adventure"],
    time: "2h 6m",
    image: "image...(wait for api)",
  };

  return (
    <div>
      <ImageContainer {...movie} />
    </div>
  );
};
