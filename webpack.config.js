const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const isProductionBuild = argv.mode === "production";
  const publicPath = "https://dchizhov259.github.io/Portfolio/dist/";

  const pcss = {
    test: /\.(p|post|)css$/,
    use: [
      isProductionBuild ? MiniCssExtractPlugin.loader : "vue-style-loader", //если сборка для Разработки - генерация тегов style и вставка их на страницу
      "css-loader", //преобразование в строку, подключение импортов, которые есть внутри стилей
      "postcss-loader" //преобразование postcss в css
    ]
  }; //правило обработки зависимостей pcss

  const vue = {
    test: /\.vue$/,
    loader: "vue-loader"
  }; //правило обработки зависимостей vue

  const js = {
    test: /\.js$/,
    loader: "babel-loader", //конвертация в ES5 в соответсвии с browserslist из package.json
    exclude: /node_modules/,
    options: {
      presets: ["@babel/preset-env"],
      plugins: ["@babel/plugin-syntax-dynamic-import"]
    }
  }; //правило обработки зависимостей js

  const files = {
    test: /\.(png|jpe?g|gif|woff2?)$/i,
    loader: "file-loader", //простая загрузка в папку dist
    options: {
      name: "[hash].[ext]" //имя файла hash
    }
  }; //правило обработки зависимостей для прочих файлов

  const svg = {
    test: /\.svg$/,
    use: [
      {
        loader: "svg-sprite-loader", //сборка спрайта
        options: {
          extract: true,
          spriteFilename: svgPath => `sprite${svgPath.substr(-4)}`
        }
      },
      "svg-transform-loader", //можно в пути указать параметры ./test.svg?fill=#000&stroke=red
      {
        loader: "svgo-loader", //удаление из файлов мусора, а также fill и stroke
        options: {
          plugins: [
            { removeTitle: true },
            {
              removeAttrs: {
                attrs: "(fill|stroke)"
              }
            }
          ]
        }
      }
    ]
  }; //правило обработки зависимостей svg

  const pug = {
    test: /\.pug$/,
    oneOf: [
      {
        resourceQuery: /^\?vue/,
        use: ["pug-plain-loader"]
      },
      {
        use: ["pug-loader"]
      }
    ]
  }; //правило обработки зависимостей pug

  const config = {
    entry: {
      main: "./src/main.js",
      admin: "./src/admin/main.js"
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].[hash].build.js", //hash нужен для браузера, показывет, были ли изменения в файлах проекта, при совпадении возмет файл из кэша
      publicPath: isProductionBuild ? publicPath : "",
      chunkFilename: "[chunkhash].js" //в этом файле объединяются общие зависимости из разных файлов
    },
    module: {
      rules: [pcss, vue, js, files, svg, pug] //правила обработки зависимостей для webpack, описание в начале файла
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js", //если где-то будет import "vue", то будет подключен именно сборка vue.esm.js
        images: path.resolve(__dirname, "src/images") //сокращение пути с картинками
      },
      extensions: ["*", ".js", ".vue", ".json"] // при подключении import "./test/new" поиск в папке new index.js, index.vue и т.д.
    },
    devServer: {
      historyApiFallback: true,
      noInfo: false,
      overlay: true
    },
    performance: {
      hints: false
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.pug",
        chunks: ["main"]
      }),
      new HtmlWebpackPlugin({
        template: "src/admin/index.pug",
        filename: "admin/index.html",
        chunks: ["admin"]
      }),
      new SpriteLoaderPlugin({ plainSprite: true }),
      new VueLoaderPlugin()
    ],
    devtool: "#eval-source-map"
  };

  if (isProductionBuild) {
    config.devtool = "none";
    config.plugins = (config.plugins || []).concat([
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: '"production"'
        }
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        chunkFilename: "[contenthash].css"
      })
    ]);

    config.optimization = {};

    config.optimization.minimizer = [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ];
  }

  return config;
};
