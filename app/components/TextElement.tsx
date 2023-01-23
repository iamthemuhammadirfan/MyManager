import {StyleSheet, Text, View} from "react-native";
import React from "react";

type Props = {
  children: string;
};
const TextElement = ({children}: Props) => {
  return <Text>{children}</Text>;
};

export default TextElement;

const styles = StyleSheet.create({});
