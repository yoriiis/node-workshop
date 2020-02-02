'use strict';

import SampleWebpackPlugin from '../index';

let sampleWebpackPlugin;
let compilationWebpack;
let compilerWebpack;

const options = {
	outputPath: '../web/assets',
	filename: 'example.md',
	onBuild: manifest => {
		console.log(manifest);
	}
};

const getInstance = () => new SampleWebpackPlugin(options);

const entrypointsMap = new Map();
entrypointsMap.set('app-a', {
	chunks: {
		files: [
			'css/vendors~app-a~app-b.css',
			'js/vendors~app-a~app-b.js',
			'css/vendors~app-a~app-b.css.map',
			'js/vendors~app-a~app-b.js.map',
			'css/app-a.css',
			'js/app-a.js',
			'css/app-a.css.map',
			'js/app-a.js.map'
		]
	},
	getFiles: () => entrypointsMap.get('app-a').chunks.files
});
entrypointsMap.set('app-b', {
	chunks: {
		files: [
			'css/vendors~app-a~app-b.css',
			'js/vendors~app-a~app-b.js',
			'css/vendors~app-a~app-b.css.map',
			'js/vendors~app-a~app-b.js.map',
			'css/app-b.css',
			'js/app-b.js',
			'css/app-b.css.map',
			'js/app-b.js.map'
		]
	},
	getFiles: () => entrypointsMap.get('app-b').chunks.files
});

beforeEach(() => {
	compilerWebpack = {
		hooks: {
			emit: {
				tap: () => {}
			}
		}
	};

	compilationWebpack = {
		assets: {},
		entrypoints: entrypointsMap,
		options: {
			output: {
				path: '/dist/',
				publicPath: '/dist'
			}
		}
	};

	sampleWebpackPlugin = getInstance();
});

describe('SampleWebpackPlugin', () => {
	it('Initialize the constructor', () => {
		expect(sampleWebpackPlugin.options).toMatchObject({
			outputPath: '../web/assets',
			filename: 'example.md',
			onBuild: expect.any(Function)
		});
	});

	it('Initialize the apply function', () => {
		compilerWebpack.hooks.emit.tap = jest.fn();

		sampleWebpackPlugin.apply(compilerWebpack);
		compilerWebpack.hooks.emit.tap();

		expect(compilerWebpack.hooks.emit.tap).toHaveBeenCalled();
	});

	it('Initialize the hookCallback function', () => {
		sampleWebpackPlugin.hookCallback(compilationWebpack);
	});
});
