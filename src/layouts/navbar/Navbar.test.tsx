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
    let assignSpy = jest.spyOn(window.location, 'assign')
    //assert the expected result
    expect(assignSpy).toBe("http://localhost:3000/");
});


