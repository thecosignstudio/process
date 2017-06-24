import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'javascript/application.js',
  dest: 'build/js/application.min.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    uglify(),
  ],
};
