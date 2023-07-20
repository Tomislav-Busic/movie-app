import { render, screen, waitFor } from "@testing-library/react";
import { Overview } from "./Overview";

const mockOverview = {
  overview: "Overview",
};

const mockCast = {
  cast: [],
};

describe("Overview", () => {
  it("should render Overview", () => {
    const { getByText } = render(
      <Overview overview={mockOverview.overview} cast={mockCast.cast} />
    );

    expect(getByText).not.toBeNull();
  });

  it("should render description, actors", async () => {
    render(<Overview overview={mockOverview.overview} cast={mockCast.cast} />);

    const description = await waitFor(() => screen.findByTitle("description"));
    const actors = await waitFor(() => screen.findAllByRole("listitem"));

    expect(description.textContent).toEqual(mockOverview.overview);
    expect(actors.length).toEqual(mockCast.cast.length);
  });
});
