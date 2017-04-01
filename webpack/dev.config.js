const webpack = require('webpack');
const path = require('path');

module.exports = {
	context: path.resolve(__dirname, '..'),
	devtool: 'eval-source-map',
	entry: [
		'react-hot-loader/patch',
                'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/client.jsx'
	],
	output: {
		filename: 'devBundle.js',
		path: path.resolve(__dirname, '..', 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/	
			},
		]
	},
	devServer: {
		hot: true,
		contentBase: path.resolve(__dirname, '..', 'dist'),
		publicPath: '/',
		historyApiFallback: true
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
	]
}