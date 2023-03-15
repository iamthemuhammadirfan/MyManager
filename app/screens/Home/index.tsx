import React from "react";
import {StyleSheet, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Container from "components/Container";

const HomeScreen = () => {
  return (
    <Container>
      <Icon name="rocket" size={30} color="#ffffff" testID="icon" />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
