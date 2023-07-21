import { render, screen, waitFor } from "@testing-library/react";
import { MovieHeader } from "./MovieHeader";

const mockMovieHeaderProps = {
  release_date: "01/01/2023",
  backdrop_path: "/path.jpg",
  runtime: 123,
  genres: [{ id: 1, name: "name" }],
  production_countries: [{ iso_3166_1: "US", name: "us" }],
};

describe("MovieHeader", () => {
  it("should render MovieHeader", () => {
    const { getByText } = render(
      <MovieHeader
        release_date={mockMovieHeaderProps.release_date}
        production_countries={mockMovieHeaderProps.production_countries}
        genres={mockMovieHeaderProps.genres}
        runtime={mockMovieHeaderProps.runtime}
        backdrop_path={mockMovieHeaderProps.backdrop_path}
      />
    );

    expect(getByText).not.toBeNull();
  });

  it("should render year, country, genres, time", async () => {
    render(
      <MovieHeader
        release_date={mockMovieHeaderProps.release_date}
        production_countries={mockMovieHeaderProps.production_countries}
        genres={mockMovieHeaderProps.genres}
        runtime={mockMovieHeaderProps.runtime}
        backdrop_path={mockMovieHeaderProps.backdrop_path}
      />
    );

    const year = await waitFor(() => screen.findByTitle("year"));
    const country = await waitFor(() => screen.findByTitle("country"));
    const time = await waitFor(() => screen.findByTitle("time"));
    const genres = await waitFor(() => screen.findByTitle("genre"));

    expect(year.textContent).toEqual(mockMovieHeaderProps.release_date);
    expect(country.textContent).toEqual(
      mockMovieHeaderProps.production_countries
    );
    expect(time.textContent).toEqual(mockMovieHeaderProps.runtime);
    expect(genres.textContent).toEqual(mockMovieHeaderProps.genres);
  });
});
