import { render, fireEvent, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";



//test block
test("increments counter", () => {
    // render the component on virtual dom
    render(<Navbar />);

    //select the elements you want to interact with
    const homebtn = screen.getByTestId("home_btn");

    //interact with those elements
    fireEvent.click(homebtn);
    const location = window.location.href;
    //assert the expected result
    expect(location).toBe("http://localhost:3000/");
});


