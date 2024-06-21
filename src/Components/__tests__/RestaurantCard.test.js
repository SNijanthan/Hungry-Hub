import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../Mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard res={MOCK_DATA} />);

  //   const name = screen.getByText("Pizza Hut");
  //   expect(name).toBeInTheDocument();
});
