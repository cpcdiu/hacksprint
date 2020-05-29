module.exports = {
	reactScriptsVersion: "react-scripts",
	babel: {
		presets: [],
		plugins: ["styled-jsx/babel"],
		loaderOptions: {
			/* Any babel-loader configuration options: https://github.com/babel/babel-loader. */
		},
		loaderOptions: (babelLoaderOptions, { env, paths }) => {
			return babelLoaderOptions;
		},
	},
};
