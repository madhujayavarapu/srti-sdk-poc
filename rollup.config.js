import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import terser from '@rollup/plugin-terser';
import scss from 'rollup-plugin-scss';
import typescript from '@rollup/plugin-typescript';

const version = '1.0.0';

// ENV
const outDir = 'dist';
const filename = 'index';
const isProduction = process.env.NODE_ENV === 'prod';
console.log('Builds are generating for env:', process.env.NODE_ENV);

// common output options
const outputOpts = {
  sourcemap: true,
  // TODO: Read the license file and add it as a banner.
  banner: `/**@licenseSecuriti Inc. All rights reserved.\nLicense related info can be included here.\nVersion: ${version}*/`,
};

export default {
  input: 'src/index.ts',
  output: [
    {
      ...outputOpts,
      file: `${outDir}/${filename}.cjs.js`,
      format: 'cjs',
    },
    {
      ...outputOpts,
      file: `${outDir}/${filename}.esm.js`,
      format: 'es',
    },
    {
      ...outputOpts,
      name: 'cookieConsent',
      file: `${outDir}/${filename}.umd.js`,
      format: 'umd',
    },
  ],
  plugins: [
    scss({
      fileName: 'style.min.css',
      outputStyle: 'compressed',
    }),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    resolve(),
    commonjs(),
    isProduction &&
      terser({
        // to support IE8 browser. by default it is false.
        ie8: true,
        format: {
          comments: function (node, comment) {
            var text = comment.value;
            var type = comment.type;
            if (type == 'comment2') {
              // multiline comment
              return /@preserve|@license/i.test(text);
            }
          },
        },
      }),
  ],
};
