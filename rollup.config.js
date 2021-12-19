import typescript from 'rollup-plugin-typescript2';

const pkg = require('./package.json');

const externalPackages = [...Object.keys(pkg.dependencies || {})];

const regexesOfPackages = externalPackages.map((packageName) => {
  return new RegExp(`^${packageName}(\/.*)?`);
});

const plugins = [
  typescript({
    useTsconfigDeclarationDir: false,
    tsconfig: './tsconfig.json',
  }),
];

/**
 * @type {import('rollup').RollupOptions}
 */
const esConfig = {
  input: 'index.ts',
  output: {
    file: 'build/index.js',
    format: 'module',
  },
  plugins,
  external: regexesOfPackages,
};

/**
 * @type {import('rollup').RollupOptions}
 */
const cjsConfig = {
  input: 'index.ts',
  output: {
    file: 'build/index.cjs',
    exports: 'named',
    format: 'commonjs',
    esModule: false,
  },
  plugins,
  external: regexesOfPackages,
};

export default [esConfig, cjsConfig];
