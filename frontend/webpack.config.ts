import * as path from "path";
import * as CopyWebpackPlugin from "copy-webpack-plugin";

const config = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.join(__dirname, "dist", "static", "js")
  },
  mode: "development",
  target: "web",
  watch: true,
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@src": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "src", "index.html"),
          to: path.join(__dirname, "dist", "index.html"),
        },
        {
          from: path.join(__dirname, "src", "static"),
          to: path.join(__dirname, "dist", "static"),
        },
      ],
    }),
  ]
};

export default config;
