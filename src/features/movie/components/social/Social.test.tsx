import { screen, fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Social } from "./Social";
/* 
describe("Social", () => {
  it("should render Social", () => {
    const { getByText } = render(<Social movie={movie} />);

    expect(getByText).not.toBeNull();
  });

  it("should be active Reviews", async () => {
    render(<Social movie={movie} />);

    const button = screen.getByText(`Reviews (${movie.reviews.length})`);
    fireEvent.click(button);

    const reviewsElement = await waitFor(() => screen.findByTitle("reviews"));

    expect(reviewsElement).toBeInTheDocument();
  });
});
 */
