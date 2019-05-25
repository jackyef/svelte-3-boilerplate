import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';

const production = process.env.NODE_ENV === 'production';

export default {
  input: './server/index.js',
  output: {
    sourcemap: true,
    name: 'app',
    format: 'iife', 
    file: './server/build/server.js'
  },

  plugins: [
    svelte({
			// enable run-time checks when not in production
      dev: !production,

      // By default, the client-side compiler is used. You
      // can also use the server-side rendering compiler
      generate: 'ssr',
    }),

    // If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
    resolve(),
  ],

  watch: {
		clearScreen: false,
	},
}
