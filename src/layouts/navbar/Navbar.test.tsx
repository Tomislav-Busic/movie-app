import { screen, fireEvent, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Navbar } from "./Navbar";
import { MemoryRouter } from "react-router-dom";


//test Home button
test("testing home button", () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);

    const divElement = screen.getByRole("homeBlue");
    const buttonElement = screen.getByText("Home");
    fireEvent.click(buttonElement);


    expect(divElement).toBeInTheDocument();
});

//test Favorite button
test("testing favorite button", () => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);

    const divElement = screen.getByRole("favoriteBlue");
    const buttonElement = screen.getByText("Favorite");
    fireEvent.click(buttonElement);


    expect(divElement).toBeInTheDocument();
});



