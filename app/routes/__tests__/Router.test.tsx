import React from "react";
import {fireEvent, render} from "@testing-library/react-native";

import Router from "routes/Router";

describe("Router Component", () => {
  it("Should matches with the snap shoots", () => {
    const tree = render(<Router />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
