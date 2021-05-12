module.exports = {
  rootDir: "src",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "\\.(png)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: [
    "../node_modules/@testing-library/jest-dom/dist/index.js",
  ],
  coverageThreshold: {
    global: {
      branches: 94,
      functions: 97,
      lines: 96,
      statements: 96,
    },
  },
  coverageDirectory: "../coverage",
  collectCoverageFrom: [
    "!./environments/*.ts",
    "!./root.component.tsx",
    "./**/*.{ts,tsx}",
  ],
  setupFiles: ["../jest.global.jsx"],
};
