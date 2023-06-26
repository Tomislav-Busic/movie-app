import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { expectNever } from "../../../../test/utilities/utilities";
import { GoBack } from "./GoBack";

describe("GoBack", () => {
  it("will show go back btn", () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/favorites" }]}>
        <GoBack />
      </MemoryRouter>
    );

    const buttonElement = screen.getByRole("back");

    expect(buttonElement).toBeInTheDocument();
  });

  it("will hide go back button", async () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: "/" }]}>
        <GoBack />
      </MemoryRouter>
    );

    await expectNever(() => {
      expect(screen.getByRole("back")).toBeInTheDocument();
    });
  });
});
