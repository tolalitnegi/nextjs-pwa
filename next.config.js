const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  webpack: config => {
    config.plugins.push(

      new SWPrecacheWebpackPlugin({
        // cacheid: 'hckercache',
        minify: true,
        // filename: ServiceWorker.js,
        staticFileGlobsIgnorePatterns: [/\.next\//], // ignore static files
        runtimeCaching: [ // caching statergy for service workers
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
      // .then(res=>{
      //   console.log('SWPrecacheWebpackPlugin is good ',res);
      // })
      // .error(err=>{
      //   console.log('SWPrecacheWebpackPlugin failed ',err.message);
      // })
    )

    return config;
  }
}