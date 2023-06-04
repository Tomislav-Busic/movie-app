import { screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { Navbar } from "./Navbar";


//test block
test("testing home location", () => {
    // render the component on virtual dom
    render(<Navbar />);

    let state = false;
    //select the elements you want to interact with
    const homebtn = screen.getByTestId("homebtn");

    //interact with those elements

    userEvent.click(homebtn);

    expect(state).toBe(false);


});


