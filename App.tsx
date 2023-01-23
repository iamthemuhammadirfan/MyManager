import {Text, View} from "react-native";
import React from "react";
import TextElement from "components/TextElement";

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <TextElement>Hello, there</TextElement>
    </View>
  );
};

export default App;
