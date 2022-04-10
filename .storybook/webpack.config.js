/**
 * webpack config
 * @author: Arie M. Prasetyo (2021)
 */

 module.exports = {
  module: {
    rules: [
      {
        // Transform JS files from ES2015/JSX to ES5.
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        // CSS imports
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
              },
              url: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']]
              }
            }
          }
        ]
      },
      {
        // load image files
        test: /\.(png|jpg|svg)$/,
        use: ['url-loader']
      }
    ]
  }
};
