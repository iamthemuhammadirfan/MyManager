import React from "react";
import {render} from "@testing-library/react-native";

import HomeScreen from "screens/Home";

describe("Home Screen", () => {
  it("should matches with the snap shoots", () => {
    const tree = render(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should have components in it", () => {
    const {getByTestId} = render(<HomeScreen />);
    expect(getByTestId("icon")).toBeDefined();
  });
});
