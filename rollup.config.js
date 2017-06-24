import babel from 'rollup-plugin-babel';

export default {
  entry: 'javascript/application.js',
  dest: 'build/js/application.min.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
