const webpack = require("webpack");
const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = () => {
  const MODE = process.env.NODE_ENV;
  const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

  // pagesフォルダ直下のtsxファイルをすべて収集
  const pages = glob
    .sync("**/*.tsx", {
      ignore: "**/_*.tsx",
      cwd: "src/pages/",
    })
    .map((page) => {
      const fileExt = path.extname(page);
      const dist = page.replace(new RegExp(fileExt + "$"), ".html");
      console.log({
        template: path.join("src/pages/", page),
        filename: path.join("dist", dist),
      });
      return {
        template: path.join("src/pages/", page),
        filename: path.join("dist", dist),
      };
    });

  return {
    mode: MODE,
    devtool: IS_DEVELOPMENT ? "inline-source-map" : false,
    entry: {
      //dummy
      "dist/assets/scripts/main": "./src/index.js",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".jsx", ".js"],
      alias: {
        "@src": path.resolve("./src"),
      },
      fallback: {
        Buffer: require.resolve("buffer"),
      },
    },
    output: {
      filename: "[name].js",
      path: path.join(__dirname),
    },
    target: ["node", "es5"],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              //typescriptを変換する
              loader: "ts-loader",
              options: {
                //変換のみする
                transpileOnly: true,
                experimentalWatchApi: true,
                configFile: path.resolve(process.cwd(), "tsconfig.json"),
              },
            },
          ],
        },
      ],
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, "dist/"),
        watch: true,
      },
      watchFiles: [
        "src/pages/**/*.tsx",
        "src/components/**/*.tsx",
        "src/base_template/index.tsx",
      ],
      compress: true,
      port: 9000,
    },
    plugins: IS_DEVELOPMENT // テンプレートとプレビュー用のhtmlそれぞれの出力設定
      ? [
          ...pages.map(({ template, filename }) => {
            return new HtmlWebpackPlugin({
              template,
              filename,
              inject: false,
            });
          }),
          new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
          }),
          new webpack.ProvidePlugin({
            process: "process/browser",
          }),
          new webpack.ProgressPlugin(),
        ]
      : [
          new HtmlWebpackPlugin({
            title: "template",
            template: "./src/base_template/index.tsx",
            filename: "./dist_template/base_template.html",
            inject: false,
          }),
          new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
          }),
          new webpack.ProvidePlugin({
            process: "process/browser",
          }),
          new webpack.ProgressPlugin(),
        ],
    // 画像を扱う場合は設定してください。
    // new CopyPlugin({
    //   patterns: [{ from: "img", to: "dist/img" }],
    // }),
  };
};
