module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/data/'
    : '/',
    chainWebpack: (config) => {
      config
        .plugin('html')
        .tap((args) => {
          args[0].title = 'Библиогород МАУ ЦБС г. Улан-Удэ';
          return args;
        });
    },    
}