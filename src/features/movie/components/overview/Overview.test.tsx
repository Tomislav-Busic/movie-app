import { render, screen, waitFor } from "@testing-library/react";
import { movie } from "fakeData/data";
import { Overview } from "./Overview";

describe("Overview", () => {
  it("should render Overview", () => {
    const { getByText } = render(<Overview movie={movie} />);

    expect(getByText).not.toBeNull();
  });

  it("should render description, actors", async () => {
    render(<Overview movie={movie} />);

    const description = await waitFor(() => screen.findByTitle("description"));
    const actors = await waitFor(() => screen.findAllByRole("listitem"));

    expect(description.textContent).toEqual(movie?.description);
    expect(actors.length).toEqual(movie?.actors.length);
  });
});
