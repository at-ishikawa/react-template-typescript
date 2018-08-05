module.exports = {
  "verbose": true,
  "testURL": "http://localhost/",
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
