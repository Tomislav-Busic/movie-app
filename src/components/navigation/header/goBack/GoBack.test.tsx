import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from "react-router-dom";
import { GoBack } from "./GoBack";


test("show go back", () => {
    render(<MemoryRouter initialEntries={[{ pathname: '/favorites' }]}><GoBack /></MemoryRouter>);

    const buttonElement = screen.getByRole("back");

    expect(buttonElement).toBeInTheDocument();
});


//helper function I wrote to avoid having to repeat the boilerplate
export async function expectNever(callable: () => unknown): Promise<void> {
    await expect(() => waitFor(callable)).rejects.toEqual(expect.anything());
}

test("hide go back", async () => {
    render(
        <MemoryRouter initialEntries={[{ pathname: '/' }]}>
            <GoBack />
        </MemoryRouter>
    );

    await expectNever(() => {
        expect(screen.getByRole("back")).toBeInTheDocument();
    });
})