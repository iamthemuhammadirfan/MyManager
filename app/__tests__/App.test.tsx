import {render} from "@testing-library/react-native";
import React from "react";

import App from "../../App";

describe("App Component", () => {
  it("should match with snapshots", () => {
    const tree = render(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
