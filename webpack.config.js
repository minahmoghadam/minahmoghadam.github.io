module.exports = {
    entry: './app.js',
    output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
    },
    module: {
		rules: [
			{
                test:/\.(s*)css$/,
                use:['style-loader','css-loader', 'sass-loader']
			},
			{ 
				test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader'
			}
		]
    }
}