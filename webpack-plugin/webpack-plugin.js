/**
 * MyWebpackPlugin
 */
module.exports = class MyWebpackPlugin {
	/**
	 * Instanciate the constructor
	 *
	 * @param {options}
	 */
	constructor (options) {
		this.options = options
	}

	/**
	 * Apply function is automatically called by the Webpack main compiler
	 *
	 * @param {Object} compiler The Webpack compiler variable
	 */
	apply (compiler) {
		compiler.hooks.emit.tap('MyWebpackPlugin', this.hookEmit.bind(this))
	}

	/**
	 * Hook expose by the Webpack compiler
	 *
	 * @param {Object} compilation The Webpack compilation variable
	 */
	hookEmit (compilation) {
		// console.log(compilation)

		// Insert this list into the webpack build as a new file asset:
		const filelist = 'hello world'
		compilation.assets['hello.md'] = {
			source: function () {
				return filelist
			},
			size: function () {
				return filelist.length
			}
		}
	}
}
