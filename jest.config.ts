import type {Config} from "jest";
export default async (): Promise<Config> => {
  return {
    preset: "react-native",
    setupFiles: ["./jest/setup.ts"],
    modulePathIgnorePatterns: ["./node_modules/", "./index.js"],
    collectCoverageFrom: [
      "**/*.{js,jsx,ts,tsx}",
      "!**/node_modules/**",
      "!**/vendor/**",
      "!**/code-coverage/**",
    ],
    coverageReporters: ["html"],
    coverageDirectory: "./code-coverage",
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "./node_modules/babel-jest",
    },
    transformIgnorePatterns: [
      "node_modules/(?!(@react-native|react-native|react-native-vector-icons|@react-navigation)/)",
    ],
  };
};
