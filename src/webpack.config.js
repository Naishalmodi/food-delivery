module.exports = {
    // Entry point for your application
    entry: './src/index.js',
  
    // Output configuration
    output: {
      // Output directory
      path: path.resolve(__dirname, 'dist'),
      // Output filename
      filename: 'bundle.js',
    },
  
    // Module rules for transpiling and processing assets
    module: {
      rules: [
        // Rule for transpiling JavaScript using Babel
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        // Rule for processing CSS files
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        // Rule for processing images
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192, // Inline images smaller than 8 KB
              },
            },
          ],
        },
      ],
    },
  };