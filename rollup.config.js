import configRollbar from '@monx/rollup-config';
import { dependencies, peerDependencies } from './package.json';

export default configRollbar({
  input: ['src/index.ts'],
  dependencies,
  peerDependencies,
  format: 'amd',
});
