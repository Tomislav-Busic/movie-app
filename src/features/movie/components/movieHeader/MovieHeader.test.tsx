import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { movie } from "fakeData/data";
import { MovieHeader } from "./MovieHeader";

describe("MovieHeader", () => {
  it("should render MovieHeader", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={[{ pathname: "/movie/:id" }]}>
        <MovieHeader movie={movie} />
      </MemoryRouter>
    );

    expect(getByText).not.toBeNull();
  });

  it("should render year, country, genres, time", async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/movie/:id" }]}>
        <MovieHeader movie={movie} />
      </MemoryRouter>
    );

    const year = await waitFor(() => screen.findByTitle("year"));
    const country = await waitFor(() => screen.findByTitle("country"));
    const time = await waitFor(() => screen.findByTitle("time"));
    const genres = await waitFor(() => screen.findByTitle("genre"));

    expect(year.textContent).toEqual(movie?.year);
    expect(country.textContent).toEqual(movie?.country);
    expect(time.textContent).toEqual(movie?.time);
    expect(genres.textContent).toEqual(movie?.genre.join(", "));
  });
});
