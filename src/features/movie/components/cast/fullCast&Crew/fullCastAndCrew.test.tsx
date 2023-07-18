import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { movie } from "fakeData/data";
import { FullCastAndCrew } from "./FullCastAndCrew";

describe("FullCastAndCrew", () => {
  it("should render FullCastAndCrew", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={[{ pathname: "/movie/:id" }]}>
        <FullCastAndCrew fullcac={movie.full_cast_and_crew} />
      </MemoryRouter>
    );

    expect(getByText).not.toBeNull();
  });

  it("should render equal actors length", async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/movie/:id" }]}>
        <FullCastAndCrew fullcac={movie.full_cast_and_crew} />
      </MemoryRouter>
    );

    const actors = await waitFor(() => screen.findAllByRole("listitem"));

    expect(actors.length).toEqual(movie?.full_cast_and_crew.length);
  });
});
