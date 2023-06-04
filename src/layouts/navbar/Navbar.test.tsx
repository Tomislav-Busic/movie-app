import { act, renderHook, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import { Navbar } from "./Navbar";


//test block
test("testing home location", () => {
    // render the component on virtual dom
    render(<Navbar />)
    const { result } = renderHook(() => Navbar());

    act(() => {
        result.current.toHomePage();
    })

    expect(result.current.toggle).toBe(false);
});


