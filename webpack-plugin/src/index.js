/**
 * SampleWebpackPlugin
 */
module.exports = class SampleWebpackPlugin {
	/**
	 * Instanciate the constructor
	 *
	 * @param {options}
	 */
	constructor (options) {
		this.options = options;
	}

	/**
	 * Apply function is automatically called by the Webpack main compiler
	 *
	 * @param {Object} compiler The Webpack compiler variable
	 */
	apply (compiler) {
		// console.log(compiler);
		compiler.hooks.emit.tap(
			'SampleWebpackPlugin',
			this.hookCallback.bind(this)
		);
	}

	/**
	 * Hook expose by the Webpack compiler
	 *
	 * @param {Object} compilation The Webpack compilation variable
	 */
	hookCallback (compilation) {
		// Insert this list into the webpack build as a new file asset:
		// const text = 'hello world';
		// compilation.assets[this.options.filename] = {
		// 	source: function () {
		// 		return text;
		// 	},
		// 	size: function () {
		// 		return text.length;
		// 	}
		// };
	}
};
