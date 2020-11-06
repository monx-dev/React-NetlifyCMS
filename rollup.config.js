import configRollbar from '@monx/rollup-config';
import { dependencies, peerDependencies } from './package.json';

export default configRollbar({
  input: ['src/index.ts', 'src/Preview.tsx', 'src/Widget.tsx'],
  dependencies,
  peerDependencies,
});
