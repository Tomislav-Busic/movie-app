import { screen, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Navbar } from "./Navbar";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {
  it("should be active home button", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const divElement = screen.getByRole("homeBlue");
    const buttonElement = screen.getByText("Home");
    fireEvent.click(buttonElement);

    expect(divElement).toBeInTheDocument();
  });

  it("should be active favorite button", async () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const buttonElement = screen.getByText("Favorites");
    fireEvent.click(buttonElement);
    const divElement = await waitFor(() => screen.findByRole("favoriteBlue"));

    expect(divElement).toBeInTheDocument();
  });
});
