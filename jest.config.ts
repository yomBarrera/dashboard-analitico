module.exports = {
  preset: "ts-jest",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  collectCoverageFrom: [
    "src/pages/*/.{js,jsx,ts,tsx}",
    "!src/pages/_app.tsx",
    "!src/pages/*.tsx",
    "!src/pages/api/**.{js,ts}",
    "!*/.d.ts",
    "!*/node_modules/*",
  ],
  moduleNameMapper: {
    "/^.+\\.module\\.(css|sass|scss)$/": "identity-obj-proxy",
    "^@/assets/(.*)$": "<rootDir>/assets/$1",
    "^@/ui/(.*)$": "<rootDir>/src/ui/$1",
    "^@/context/(.*)$": "<rootDir>/src/context/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
  ],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: ["^.+\\.module\\.(css|sass|scss)$"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironmentOptions: {
    url: "http://localhost",
  },
};
