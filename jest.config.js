module.exports = {
  roots: ["src"],
  testMatch: ["**/__tests__/**/*.ts"],
  transform: {"^.+\\.ts$": "ts-jest"},

  moduleNameMapper: {
    "@anychart/anydemo(.*)$": "<rootDir>//src/components/$1",
  },
};
