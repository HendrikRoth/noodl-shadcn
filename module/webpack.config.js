const path = require("path");
const fs = require("fs-extra");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const pjson = require("./package.json");
var outputPath = path.resolve(
  __dirname,
  "../project/noodl_modules/" + pjson.name,
);

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "index.js",
    path: outputPath,
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".css"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  plugins: [
    new CleanWebpackPlugin(outputPath),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "assets/**/*",
          to: "[name][ext]",
        },
      ],
    }),

    // Copy the generated module files to the tests project if it exists
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap("AfterEmitPlugin", (compilation) => {
          if (fs.existsSync(path.resolve(__dirname, "../tests"))) {
            fs.copySync(
              outputPath,
              path.resolve(__dirname, "../tests/noodl_modules/" + pjson.name),
            );
          }
        });
      },
    },
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
