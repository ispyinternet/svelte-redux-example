import * as fs from 'fs';
import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import nodeResolve from 'rollup-plugin-node-resolve';
import resolve from 'rollup-plugin-node-resolve-magic';	

export default {
    entry: './src/index.js',
    dest: './build/app.js', 
    format: 'umd',
    sourceMap: 'inline',
    plugins: [	
	resolve({
	    browser: true
	}),
	nodeResolve({
	    module: true,
	    jsnext: true,
	    main: true,
	    browser: true,
	    extensions: ['.js']
	}),
	commonjs({
	    include: 'node_modules/**',
	    namedExports: {
		'./node_modules/redux-logger/dist/redux-logger.js': [ 'createLogger' ] 
	    }
	}),
	replace({
	    values: {
		'process.env.NODE_ENV': "'development'"
	    }
	}),
	svelte(),
	babel({
	    exclude: 'node_modules/**',
	    babelrc: false,
	    plugins: [
		"transform-object-rest-spread"
	    ]		
	})	
    ]
};
