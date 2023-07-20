import { render, screen, waitFor } from "@testing-library/react";
import { TopBilledCast } from "./TopBilledCast";

const mockData = [
  {
    adult: false,
    gender: 0,
    id: 3882182,
    known_for_department: "Acting",
    name: "Athena Durner",
    original_name: "Athena Durner",
    popularity: 1.529,
    profile_path: "/iQk9N5WOLvflt9Yo7NXdtIMcFn3.jpg",
    cast_id: 4,
    character: "Zoe Walters",
    credit_id: "63ca1f8fed96bc009bf622f3",
    order: 1,
  },
];

describe("TopBilledCast", () => {
  it("should render TopBilledCast", () => {
    const { getByText } = render(<TopBilledCast cast={mockData} />);

    expect(getByText).not.toBeNull();
  });

  it("should render equal actors length", async () => {
    render(<TopBilledCast cast={mockData} />);

    const actors = await waitFor(() => screen.findAllByRole("listitem"));

    expect(actors.length).toEqual(mockData.length);
  });
});
