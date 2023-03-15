module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        alias: {
          assets: "./app/assets",
          components: "./app/components",
          constants: "./app/constants",
          helpers: "./app/helpers",
          routes: "./app/routes",
          screens: "./app/screens",
          types: "./app/types",
          utils: "./app/utils",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
