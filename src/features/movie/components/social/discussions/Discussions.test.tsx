import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { movie } from "fakeData/data";
import { Discussions } from "./Discussions";

describe("Discussions", () => {
  it("should render Discussions", () => {
    const { getByText } = render(
      <Discussions discussions={movie.discussions} />
    );

    expect(getByText).not.toBeNull();
  });

  it("should render equal discussions length", async () => {
    render(<Discussions discussions={movie.discussions} />);

    const discussions = await waitFor(() => screen.findAllByRole("listitem"));

    expect(discussions.length).toEqual(movie?.discussions.length);
  });

  it("toggle changes button content", async () => {
    render(<Discussions discussions={movie.discussions} />);

    const buttons = await waitFor(() => screen.findAllByRole("button"));

    buttons.map((button) =>
      expect(button.textContent).toEqual("read the rest.")
    );

    await waitFor(() => buttons.map((button) => userEvent.click(button)));

    await waitFor(() =>
      buttons.map((button) => expect(button.textContent).toEqual("read less."))
    );
  });
});
