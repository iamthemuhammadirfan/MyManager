import React from "react";
import {View} from "react-native";
import {render} from "@testing-library/react-native";

import Container from "components/Container";

describe("Container Component", () => {
  it("should match with the snap shoots", () => {
    const tree = render(
      <Container>
        <View />
      </Container>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("should have a child component in it", () => {
    const {getByTestId} = render(
      <Container>
        <View testID="child-component" />
      </Container>,
    );

    const childComponent = getByTestId("child-component");

    expect(childComponent.props.children).toBe(
      Container.defaultProps?.children,
    );
  });
});
