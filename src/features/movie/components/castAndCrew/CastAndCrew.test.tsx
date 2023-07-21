import { screen, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { expectNever } from "test/utilities/utilities";
import { CastAndCrew } from "./CastAndCrew";

const mockDataCast = {
  cast: [],
};
const mockDataCrew = {
  crew: [],
};

describe("CastAndCrew", () => {
  it("should render CastAndCrew", () => {
    const { getByText } = render(
      <CastAndCrew cast={mockDataCast.cast} crew={mockDataCrew.crew} />
    );

    expect(getByText).not.toBeNull();
  });

  it("should be active TopBilledCastElement", async () => {
    render(<CastAndCrew cast={mockDataCast.cast} crew={mockDataCrew.crew} />);

    const button = screen.getByText("Top Billed Cast");
    fireEvent.click(button);

    const topBilledCastElement = await waitFor(() =>
      screen.findByTitle("cast")
    );

    expect(topBilledCastElement).toBeInTheDocument();

    await expectNever(() =>
      expect(screen.getByTitle("crew")).toBeInTheDocument()
    );
  });

  it("should be active FullCastAndCrewElement", async () => {
    render(<CastAndCrew cast={mockDataCast.cast} crew={mockDataCrew.crew} />);
    const button = screen.getByText("Full Cast & Crew");
    fireEvent.click(button);

    const fullCastAndCrewElement = await waitFor(() =>
      screen.findByTitle("cast")
    );

    expect(fullCastAndCrewElement).toBeInTheDocument();

    await expectNever(() =>
      expect(screen.getByTitle("crew")).toBeInTheDocument()
    );
  });
});
