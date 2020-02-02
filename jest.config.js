module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  transform: {
    "\\.tsx?$": "ts-jest",
    "\\.ts?$": "ts-jest"
  },
  testMatch: [
    "**/*.test.ts",
    "**/*.test.tsx"
  ],
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  modulePaths: [
    "<rootDir>",
    "node_modules"
  ],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>/tests/jest/config.ts"]
};
