import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'client/index.js',
  output: {
    sourcemap: true,
    name: 'app',
    format: 'iife', 
    file: 'public/client.js'
  }
}
