import { render, screen, waitFor } from "@testing-library/react";
import { movie } from "fakeData/data";
import { TopBilledCast } from "./TopBilledCast";

describe("TopBilledCast", () => {
  it("should render TopBilledCast", () => {
    const { getByText } = render(
      <TopBilledCast topbc={movie.top_billed_cast} />
    );

    expect(getByText).not.toBeNull();
  });

  it("should render equal actors length", async () => {
    render(<TopBilledCast topbc={movie.top_billed_cast} />);

    const actors = await waitFor(() => screen.findAllByRole("listitem"));

    expect(actors.length).toEqual(movie?.top_billed_cast.length);
  });
});
