const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
      { 
        loader: require.resolve('react-docgen-typescript-loader') 
      }
    ]
  });

  config.module.rules.push({
    test: /\.(svg|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
    include: [path.resolve(__dirname, 'fonts')],
    use: [
      {
        loader: require.resolve('url-loader')
      }
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');
  
  return config;
};