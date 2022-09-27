import typescript from 'rollup-plugin-typescript2';
import {terser} from "rollup-plugin-terser";
import multiInput from 'rollup-plugin-multi-input';

export default [{
  input: ['./index.ts'], // our source file
  output: {
    dir: '../../packages',
    format: 'esm' // the preferred format
   },
  plugins: [
   typescript({ useTsconfigDeclarationDir: false }),
   terser(), // minifies generated bundles
   multiInput(),
  ]
 },
];
