module.exports = {
    lintOnSave: false,
    baseUrl:'./',
    devServer: {
        port: 4040,
        // publicPath:"./"
    },
    // assetsDir:'./',

    chainWebpack: (config) => {
        config.module
            .rule('file')
            .test(/\.(tpl)$/)
            .use('html-loader')
            .loader('html-loader')
    }

};
