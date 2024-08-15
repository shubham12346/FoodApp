import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../component/Header";
import { AuthProvider } from "../AuthContext";
import { Provider } from "react-redux";
import AppStore from "../store/appStore";
import { BrowserRouter } from "react-router-dom";

test("Should test header nav bar menu is rendered ", () => {
  render(
    <BrowserRouter>
      <Provider store={AppStore}>
        <AuthProvider>
          <Header />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  );

  const link = screen.getByRole("link", {
    name: /about/i,
  });
  expect(link).toBeInTheDocument();
});
