module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      ["module-resolver", {
        "alias": {
          "@Assets/*": "./assets",
          "@Components/*": "./src/components",
          "@Helpers/*": "./src/helpers",
          "@Hooks/*": "./src/hooks",
          "@Navigation/*": "./src/navigation",
          "@Redux/*": "./src/redux",
          "@Screens/*": "./src/screens",
          "@Stores/*": "./src/redux",
          "@Translations/*": "./src/translations"
        },
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }],
    ]
  };
};
