module.exports = {
  transform: {
    "^.+\\.svelte$": ["svelte-jester", { preprocess: true }],
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
  },
  moduleFileExtensions: ["svelte", "js", "ts"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/public/"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
