import * as path from "path";
import * as CopyWebpackPlugin from "copy-webpack-plugin";
import * as express from "express";

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
  ],
  devServer: {
    compress: true,
    port: 8000,
    before: (app: any, server: any, compiler: any) => {
      app.use("/static", express.static(path.join(__dirname, "dist", "static")))
      app.get("*", (req: any, res: any) => res.sendFile(path.join(__dirname, "dist", "index.html")));
    }
  },
};

export default config;
