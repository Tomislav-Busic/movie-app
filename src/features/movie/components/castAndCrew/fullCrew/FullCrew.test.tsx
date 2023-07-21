import { render, screen, waitFor } from "@testing-library/react";
import { FullCrew } from "./FullCrew";

const mockData = [
  {
    adult: false,
    gender: 2,
    id: 12796,
    known_for_department: "Acting",
    name: "Johnny Strong",
    original_name: "Johnny Strong",
    popularity: 17.796,
    profile_path: "/zMe5hbmaMA5Jr6uVwtojusANaCg.jpg",
    credit_id: "63ca1f19ed96bc00c394b0a5",
    department: "Directing",
    job: "Director",
  },
];

describe("FullCrew", () => {
  it("should render FullCrew", () => {
    const { getByText } = render(<FullCrew crew={mockData} />);

    expect(getByText).not.toBeNull();
  });

  it("should render equal actors length", async () => {
    render(<FullCrew crew={mockData} />);

    const actors = await waitFor(() => screen.findAllByRole("listitem"));

    expect(actors.length).toEqual(mockData.length);
  });
});
