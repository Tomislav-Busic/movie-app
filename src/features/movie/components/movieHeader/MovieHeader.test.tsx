import { render, screen, waitFor } from "@testing-library/react";
import { movie } from "fakeData/data";
import { MovieHeader } from "./MovieHeader";

describe("MovieHeader", () => {
  it("should render MovieHeader", () => {
    const { getByText } = render(<MovieHeader movie={movie} />);

    expect(getByText).not.toBeNull();
  });

  it("should render year, country, genres, time", async () => {
    render(<MovieHeader movie={movie} />);

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
