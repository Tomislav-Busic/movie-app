import { render, getByText } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { Navbar } from "./Navbar";


//test block
test("testing home location", () => {
    render(<Navbar />)

    userEvent.click(getByText('Home'))


    expect().toBe(false);
});


