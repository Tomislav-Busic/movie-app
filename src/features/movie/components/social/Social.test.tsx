import { screen, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { expectNever } from "test/utilities/utilities";
import { Social } from "./Social";
import { movie } from "fakeData/data";

describe("Social", () => {
  it("should render Social", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={[{ pathname: "/movie/:id" }]}>
        <Social movie={movie} />
      </MemoryRouter>
    );

    expect(getByText).not.toBeNull();
  });

  it("should be active Reviews", async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/movie/:id" }]}>
        <Social movie={movie} />
      </MemoryRouter>
    );

    const button = screen.getByText(`Reviews (${movie.reviews.length})`);
    fireEvent.click(button);

    const reviewsElement = await waitFor(() => screen.findByTitle("reviews"));

    expect(reviewsElement).toBeInTheDocument();

    await expectNever(() =>
      expect(screen.getByTitle("discussions")).toBeInTheDocument()
    );
  });

  it("should be active Discussions", async () => {
    render(
      <MemoryRouter>
        <Social movie={movie} />
      </MemoryRouter>
    );
    const button = screen.getByText(
      `Discussions (${movie.discussions.length})`
    );
    fireEvent.click(button);

    const discussionsElement = await waitFor(() =>
      screen.findByTitle("discussions")
    );

    expect(discussionsElement).toBeInTheDocument();

    await expectNever(() =>
      expect(screen.getByTitle("reviews")).toBeInTheDocument()
    );
  });
});
