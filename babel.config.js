module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          components: "./app/components",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
