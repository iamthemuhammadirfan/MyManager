import {SafeAreaView, StyleSheet, ViewStyle} from "react-native";
import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
  style?: ViewStyle;
};

interface Styles {
  container: ViewStyle;
}

const Container: React.FC<Props> = ({children, style}: Props) => {
  return (
    <SafeAreaView style={[styles.container, style]} testID="container">
      {children}
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
});
