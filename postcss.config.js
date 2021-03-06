const browsers = [
    'android 4',
    'ios 9',
    'ie 11'
];

const plugins = [
    require('precss')(),
    require('postcss-import')(),
    require('postcss-nested'),
    require('postcss-url')({ url: 'inline' }),
    require('autoprefixer')({ browsers }),
    require('postcss-reporter')(),
    require('cssnano')()
];

module.exports = {
    plugins
};
