import React from "react";
import {render} from "@testing-library/react-native";

import TextElement from "components/TextElement";

describe("Text Element", () => {
  it("should be matched with snapshots", () => {
    const tree = render(<TextElement>Hi</TextElement>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
