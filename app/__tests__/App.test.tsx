import React from "react";
import renderer from "react-test-renderer";
import App from "../../App";

describe("Test", () => {
  test("App Renders", () => {
    renderer.create(<App />);
  });
});
