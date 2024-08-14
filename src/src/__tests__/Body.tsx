import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppStore from "../store/appStore";
import { AuthProvider } from "../AuthContext";
import Body from "../component/Body";

describe("Body environment test ", () => {
  test("Should render input box and search button ", () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <AuthProvider>
            <Body />
          </AuthProvider>
        </Provider>
      </BrowserRouter>
    );
    // find input search box on the screen
    const inputElement: HTMLInputElement =
      screen.getByTestId("inputSearchText");
    expect(inputElement).toBeInTheDocument();
    // add input text and check on the ui
    fireEvent.change(inputElement, { target: { value: "pizza" } });
    expect(inputElement.value).toBe("pizza");

    // check search button on the dom
    const searchButton: HTMLButtonElement = screen.getByRole("button", {
      name: /Search/i,
    });
    expect(searchButton).toBeInTheDocument();
  });

  test("should render the restaurants after search", async () => {
    render(
      <BrowserRouter>
        <Provider store={AppStore}>
          <AuthProvider>
            <Body />
          </AuthProvider>
        </Provider>
      </BrowserRouter>
    );
    // Check that the loader is displayed initially
    expect(screen.getByTestId("skeletonLoader")).toBeInTheDocument();

    // Wait for the restaurant container to appear after the loader disappears
    const restaurantCard = await waitFor(
      () => {
        const cards = screen.getAllByTestId("restaurantCard");
        return cards;
      },
      { timeout: 3000 }
    ); // Extended timeout to account for the delay

    // Initially there should be 12 restaurant cards on the dom
    expect(restaurantCard).toHaveLength(12);

    // find input search box on the screen
    const inputElement: HTMLInputElement =
      screen.getByTestId("inputSearchText");
    expect(inputElement).toBeInTheDocument();
    // add input text and check on the ui
    fireEvent.change(inputElement, { target: { value: "pizza" } });
    expect(inputElement.value).toBe("pizza");

    // check search button on the dom
    const searchButton: HTMLButtonElement = screen.getByRole("button", {
      name: /Search/i,
    });

    fireEvent.click(searchButton);
    // After search there should be only 2 restaurant cards on the dom

    const restaurantCardAfterSearch = await waitFor(
      () => {
        const cards = screen.getAllByTestId("restaurantCard");
        return cards;
      },
      { timeout: 3000 }
    ); // Extended timeout to account for the delay
    expect(restaurantCardAfterSearch).toHaveLength(2);
  });
});
