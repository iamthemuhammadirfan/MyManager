import eslint from "../.eslintrc";
import prettierrc from "../.prettierrc";
import babelConfig from "../babel.config";
import metroConfig from "../metro.config";

// Mock app registry
jest.mock("react-native/Libraries/LogBox/LogBox");

describe("All Configurations that are being used", () => {
  it("should extend @react-native-community", () => {
    expect(eslint.extends).toContain("@react-native-community");
  });

  it("should use double quotes for strings", () => {
    expect(eslint.quotes[0]).toBe("error");
    expect(eslint.quotes[1]).toBe("double");
  });

  it("should check the prettierrc configurations", () => {
    expect(prettierrc.arrowParens).toBe("avoid");
    expect(prettierrc.trailingComma).toBe("all");
    expect(prettierrc.bracketSameLine).toBeTruthy();
    expect(prettierrc.bracketSpacing).toBeFalsy();
    expect(prettierrc.singleQuote).toBeFalsy();
  });

  it("should check the babel configurations", () => {
    expect(babelConfig.presets[0]).toBe(
      "module:metro-react-native-babel-preset",
    );
    expect(babelConfig.plugins).toHaveLength(2);
  });

  it("should check the jest configurations", async () => {
    const jestConfig = await require("../jest.config.ts").default();

    expect(jestConfig).toHaveProperty("preset", "react-native");
    expect(jestConfig).toHaveProperty("setupFiles", ["./jest/setup.ts"]);
    expect(jestConfig).toHaveProperty("modulePathIgnorePatterns", [
      "./node_modules/",
      "./index.js",
    ]);
    expect(jestConfig).toHaveProperty("collectCoverageFrom", [
      "**/*.{js,jsx,ts,tsx}",
      "!**/node_modules/**",
      "!**/vendor/**",
      "!**/code-coverage/**",
    ]);
    expect(jestConfig).toHaveProperty("coverageReporters", ["html"]);
    expect(jestConfig).toHaveProperty("coverageDirectory", "./code-coverage");
    expect(jestConfig).toHaveProperty("transform", {
      "^.+\\.(js|jsx|ts|tsx)$": "./node_modules/babel-jest",
    });
    expect(jestConfig).toHaveProperty("transformIgnorePatterns", [
      "node_modules/(?!(@react-native|react-native|react-native-vector-icons|@react-navigation)/)",
    ]);
  });

  it("should check the metro configurations", async () => {
    expect(metroConfig.transformer).toBeDefined();
    expect(typeof metroConfig.transformer).toBe("object");

    expect(metroConfig.transformer.getTransformOptions).toBeDefined();
    expect(typeof metroConfig.transformer.getTransformOptions).toBe("function");

    const transformOptions =
      await metroConfig.transformer.getTransformOptions();

    expect(transformOptions).toBeDefined();
    expect(typeof transformOptions).toBe("object");
    expect(transformOptions.transform).toBeDefined();
    expect(typeof transformOptions.transform).toBe("object");

    expect(transformOptions.transform.experimentalImportSupport).toBeFalsy();
    expect(transformOptions.transform.inlineRequires).toBeTruthy();
  });
});
