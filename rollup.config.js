const path = require('path');
const typescript = require('@rollup/plugin-typescript');

const tsConfig = {
  tsconfig: path.resolve('./tsconfig.json'),
  compilerOptions: { rootDir: './src', noEmit: false },
  exclude: ['node_modules'],
  outputToFilesystem: true,
};

const externalDeps = ['react', 'react-dom', '@jonbri/libby-ui', '@jonbri/token'];

module.exports = [
  {
    input: path.resolve('./src/index.ts'),
    output: { dir: path.resolve('./dist'), format: 'cjs', sourcemap: true },
    external: externalDeps,
    plugins: [
      typescript({
        ...tsConfig,
        compilerOptions: {
          ...tsConfig.compilerOptions,
          outDir: path.resolve('./dist'),
        },
      }),
    ],
  },
];
