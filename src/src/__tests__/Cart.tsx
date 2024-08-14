import { restaurantData } from "../component/restaurant";
import React from "react";
import { render, screen } from "@testing-library/react";
import Restaurants from "../component/Restaurants";
import { BrowserRouter } from "react-router-dom";

test("Should render a restaurant  card ", async () => {
  render(
    <BrowserRouter>
      <Restaurants
        restaurant={{
          id: 1,
          name: "Pizza Hut",
          rating: 3.9,
          time: "60-65 mins",
          type: "Pizzas",
          location: "Punawale",
          promoted: true,
          imageUrl:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
          menu: {
            starters: ["Garlic Bread", "Cheese Sticks"],
            lunch: ["Pepperoni Pizza", "Margherita Pizza"],
            dinner: ["BBQ Chicken Pizza", "Veggie Supreme Pizza"],
            beverages: ["Coke", "Pepsi"],
          },
        }}
      />
    </BrowserRouter>
  );
  const restaurantCard = screen.getByText("Pizza Hut");
  expect(restaurantCard).toBeInTheDocument();
  console.log("restaurantCard");
});
