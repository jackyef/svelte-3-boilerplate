import svelte from 'rollup-plugin-svelte';
import html from 'rollup-plugin-bundle-html';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = process.env.NODE_ENV === 'production';

export default {
  input: 'client/index.js',
  output: {
    sourcemap: true,
    name: 'app',
    format: 'iife', 
    file: 'public/client.js'
  },

  plugins: [
    svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('public/bundle.css');
			}
    }),

    // If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
    resolve(),

		commonjs(),
    
    // Watch the `public` directory and refresh the
		// browser on changes when not in production
    !production && livereload('public'),
    
    production && terser(),

    html({
      template: './tools/static/index.html', // 'src/template.html',
      dest: "public",
      filename: 'index.html',
      inject: 'body',
      // externals: [
      //     { type: 'js', file: "file1.js", pos: 'before' },
      //     { type: 'js', file: "file2.js", pos: 'before' }
      // ]
    }),
  ],

  watch: {
		clearScreen: false,
	},
}
