
module.exports = {
	presets: [
		['@vue/app', {
			polyfills: [
				'es6.promise',
				'es6.symbol',
				'es6.array.iterator',
				'es7.promise.finally'
			]
		}]
	],
		"plugins": [
		[
			"component",
			{
				"libraryName": "element-ui",
				"styleLibraryName": "theme-chalk"
			}
		]
	]
}
