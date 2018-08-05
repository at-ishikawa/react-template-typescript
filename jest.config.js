module.exports = {
  "verbose": true,
  "globals": {
    "ts-jest": {
      "tsConfigFile": "<rootDir>/tsconfig.test.json",
      "enableTsDiagnostics": true
    }
  },
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "setupFiles": [
    "<rootDir>/tests/setup.js"
  ],
  "testEnvironment": "node",
  "testURL": "http://localhost/",
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx"
  ],
  "moduleNameMapper": {
    "^Env$": "<rootDir>/tests/mocks/env.js",
    "\\.(css)$": "identity-obj-proxy"
  },
  "moduleDirectories": [
    "node_modules"
  ],
  "roots": [
    "<rootDir>/src/js"
  ]
};
