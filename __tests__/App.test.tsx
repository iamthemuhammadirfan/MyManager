import React from "react";
import {render} from "@testing-library/react-native";

import App from "../App";

describe("App Component", () => {
  it("should match with the snap shoots", () => {
    const tree = render(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
