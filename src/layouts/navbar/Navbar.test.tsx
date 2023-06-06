import { screen, fireEvent, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Navbar } from "./Navbar";


//test Home button
test("testing home button", () => {
    render(<Navbar />);

    const divElement = screen.getByRole("homeBlue");
    const buttonElement = screen.getByText("Home");
    fireEvent.click(buttonElement);

    expect(divElement).toBeInTheDocument();
});


