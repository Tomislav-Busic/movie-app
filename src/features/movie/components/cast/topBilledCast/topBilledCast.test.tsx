import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { movie } from "fakeData/data";
import { TopBilledCast } from "./TopBilledCast";

describe("TopBilledCast", () => {
  it("should render TopBilledCast", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={[{ pathname: "/movie/:id" }]}>
        <TopBilledCast topbc={movie.top_billed_cast} />
      </MemoryRouter>
    );

    expect(getByText).not.toBeNull();
  });

  it("should render equal actors length", async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/movie/:id" }]}>
        <TopBilledCast topbc={movie.top_billed_cast} />
      </MemoryRouter>
    );

    const actors = await waitFor(() => screen.findAllByRole("listitem"));

    expect(actors.length).toEqual(movie?.top_billed_cast.length);
  });
});
