import { MovieHeader } from "./components/movieHeader/MovieHeader";

export const Movie = () => {
  const movie = {
    id: "1",
    title: "Iron Man",
    year: "05/02/2008",
    country: "US",
    genre: ["Action", "Science Fiction", "Adventure"],
    time: "2h 6m",
    image: "image...(wait for api)",
    description:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    actors: [
      { name: "Don Heck", profession: "Characters" },
      { name: "Jack Kirby", profession: "Characters" },
      { name: "Jon Favreau", profession: "Director" },
      { name: "Don Heck", profession: "Screenplay" },
      { name: "Jack Marcum", profession: "Screenplay" },
      { name: "Matt Holloway", profession: "Screenplay" },
    ],
  };

  return (
    <div key={movie.id}>
      <MovieHeader {...movie} />
    </div>
  );
};
