import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Social } from "./Social";

const mockResults = [
  {
    author: "garethmb",
    author_details: {
      name: "",
      username: "garethmb",
      avatar_path:
        "/https://secure.gravatar.com/avatar/3593437cbd05cebe0a4ee753965a8ad1.jpg",
      rating: null,
    },
    content:
      "Cinemacon in 2022 and it was amazing seeing the final scene near the opening of the film as it was a rare instance of a film surpassing expectations and delivers the storyline and action with a good dose of solid characters that fans will love.\r\n\r\n4.5 stars out of 5",
    created_at: "2023-05-31T14:58:50.182Z",
    id: "647760aad3719700f9cad266",
    updated_at: "2023-05-31T14:58:50.267Z",
    url: "https://www.themoviedb.org/review/647760aad3719700f9cad266",
  },
];

describe("Social", () => {
  it("should render Social", () => {
    const { getByText } = render(<Social results={mockResults} />);

    const title1 = screen.getByText(/Social/i);
    const title2 = screen.getByText(/Reviews/i);

    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(getByText).not.toBeNull();
  });
});
