import { render, fireEvent, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";


//test block
test("testing home location", () => {
    // render the component on virtual dom
    render(<Navbar />);


    //select the elements you want to interact with
    const homebtn = screen.getByTestId("homebtn");

    //interact with those elements
    fireEvent.click(homebtn);

    expect(window.location.search).toBe("http://localhost:3000/");
    expect(window.location.href).not.toBeDefined();

});


