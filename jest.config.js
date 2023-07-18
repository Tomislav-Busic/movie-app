module.exports = {
  testEnvironment: "jsdom",
  extensionsToTreatAsEsm: [".ts", ".tsx", ".d.ts"],
  setupFilesAfterEnv: ["<rootDir>setupTests.ts"],
  modulePaths: ["<rootDir>/src"],
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "mjs",
    "cjs",
    "jsx",
    "json",
    "node",
  ],
  moduleNameMapper: {
    "^.+\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
    "^.+\\.js$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!uuid).+\\.js$"],
};
