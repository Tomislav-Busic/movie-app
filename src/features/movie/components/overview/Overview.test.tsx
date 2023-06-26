import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { movie } from "root/data";
import { Overview } from "./Overview";

describe("Overview", () => {
  it("should render Overview", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={[{ pathname: "/movie/:id" }]}>
        <Overview movie={movie} />
      </MemoryRouter>
    );

    expect(getByText).not.toBeNull();
  });

  it("should render description, actors", async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/movie/:id" }]}>
        <Overview movie={movie} />
      </MemoryRouter>
    );

    const description = await waitFor(() => screen.findByTitle("description"));
    const actors = await waitFor(() => screen.findAllByRole("listitem"));

    expect(description.textContent).toEqual(movie?.description);
    expect(actors.length).toEqual(movie?.actors.length);
  });
});
