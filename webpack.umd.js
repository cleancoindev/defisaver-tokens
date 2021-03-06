const path = require('path');

module.exports = {
  mode: "none",
  entry: './src/index.ts',
  output: {
    library: 'defisaver-tokens',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'umd'),
    filename: 'index.js',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.[tj]s$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-typescript',
              [
                "@babel/preset-env",
                {
                  "targets": {
                    "esmodules": true
                  }
                },
              ],
            ]
          }
        }
      },
    ]
  },
  externals: ["react", "decimal.js"],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
