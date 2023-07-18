import { screen, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { expectNever } from "test/utilities/utilities";
import { Cast } from "./Cast";
import { movie } from "fakeData/data";

describe("Cast", () => {
  it("should render Cast", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={[{ pathname: "/movie/:id" }]}>
        <Cast movie={movie} />
      </MemoryRouter>
    );

    expect(getByText).not.toBeNull();
  });

  it("should be active TopBilledCastElement", async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/movie/:id" }]}>
        <Cast movie={movie} />
      </MemoryRouter>
    );

    const button = screen.getByText("Top Billed Cast");
    fireEvent.click(button);

    const topBilledCastElement = await waitFor(() =>
      screen.findByTitle("topbc")
    );

    expect(topBilledCastElement).toBeInTheDocument();

    await expectNever(() =>
      expect(screen.getByTitle("fullcac")).toBeInTheDocument()
    );
  });

  it("should be active FullCastAndCrewElement", async () => {
    render(
      <MemoryRouter>
        <Cast movie={movie} />
      </MemoryRouter>
    );
    const button = screen.getByText("Full Cast & Crew");
    fireEvent.click(button);

    const fullCastAndCrewElement = await waitFor(() =>
      screen.findByTitle("fullcac")
    );

    expect(fullCastAndCrewElement).toBeInTheDocument();

    await expectNever(() =>
      expect(screen.getByTitle("topbc")).toBeInTheDocument()
    );
  });
});
