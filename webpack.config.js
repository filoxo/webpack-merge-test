const { mergeWithCustomize, customizeArray } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");

const mergeRulesByTestMatch = mergeWithCustomize({
  customizeArray: customizeArray({
    module: {
      rules: {
        test: "match",
        use: {
          loader: "match",
          options: "replace"
        }
      }
    }
  })
})

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "example",
    projectName: "application",
    webpackConfigEnv,
  });

  const config = mergeRulesByTestMatch(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.html$/i,
          use: [{ loader: "html-loader" }],
        },
        {
          test: /\.css$/i,
          use: [
            {
              loader: require.resolve("style-loader", { paths: [__dirname] }),
            },
            {
              loader: require.resolve("css-loader", { paths: [__dirname] }),
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: "postcss-loader",
            },
          ],
        },
      ],
    }
  });

  console.dir(config, { depth: null })

  return config
};


