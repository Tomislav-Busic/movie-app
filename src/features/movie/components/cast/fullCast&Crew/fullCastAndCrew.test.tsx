import { render, screen, waitFor } from "@testing-library/react";
import { movie } from "fakeData/data";
import { FullCastAndCrew } from "./FullCastAndCrew";

describe("FullCastAndCrew", () => {
  it("should render FullCastAndCrew", () => {
    const { getByText } = render(
      <FullCastAndCrew fullcac={movie.full_cast_and_crew} />
    );

    expect(getByText).not.toBeNull();
  });

  it("should render equal actors length", async () => {
    render(<FullCastAndCrew fullcac={movie.full_cast_and_crew} />);

    const actors = await waitFor(() => screen.findAllByRole("listitem"));

    expect(actors.length).toEqual(movie?.full_cast_and_crew.length);
  });
});
