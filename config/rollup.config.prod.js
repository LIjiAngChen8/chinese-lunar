import commonjs from '@rollup/plugin-commonjs';
import strip from '@rollup/plugin-strip';
import terser from '@rollup/plugin-terser';
import filesize from 'rollup-plugin-filesize';
import typescript from '@rollup/plugin-typescript';

const name = 'chineselunar';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.min.js',
      format: 'umd',
      name,
      exports: 'named',
      plugins: [terser()],
      compact: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
      exports: 'named',
      plugins: [terser()],
      compact: true,
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'named',
      plugins: [terser()],
      compact: true,
    },
  ],
  plugins: [
    commonjs(),
    strip(),
    typescript({
      compilerOptions: {
        declaration: true,
        declarationDir: 'types',
        emitDeclarationOnly: true,
      },
    }),
    filesize(),
  ],
};
