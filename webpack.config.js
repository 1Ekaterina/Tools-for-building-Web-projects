
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {                  
    entry: resolve(__dirname, 'js', 'main.js'),        
    output: {
        path: resolve(__dirname, 'build'), 
        filename: 'main.[contenthash].js'
    },
    module: {
		rules: [
	        { 
			    test: /\\.(png|jpe?g|gif|mp3)$/i, 
			    use: 'file-loader' 
		    },
			{
				test: /\.css$/, 
				use: ['style-loader', 'css-loader'] 
			},
	    ],
	},
    plugins: [
		
        new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html')})
    ]
};