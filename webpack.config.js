module.exports = {
    // ... 其他配置
    module: {
      rules: [
        // ... 其他规则
        {
          test: /\.(mp4)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/mp4/'
            }
          }
        }
      ]
    }
  };