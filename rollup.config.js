import configRollbar from '@monx/rollup-config';
import { main, dependencies, peerDependencies, browser, module } from './package.json';

export default configRollbar({
  dependencies,
  output: 'teste',
  file: 'src/index.ts',
  main,
  browser,
  module,
  peerDependencies,
});
