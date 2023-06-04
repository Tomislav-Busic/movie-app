import { render, getByText, getByTestId } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { Navbar } from "./Navbar";


//test block
test("testing home location", () => {
    render(<Navbar />)

    userEvent.click(getByTestId("homebtn"))


    expect().toBe(false);
});


