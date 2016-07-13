/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import run from './run';
import clean from './clean';
import copy from './copy';
import compile from './compile';
import render from './render';

/**
 * Compiles the project from source files into a distributable
 * format and copies it to the output (build) folder.
 */
async function build() {
  await run(clean);
  await Promise.all([
    run(copy),
    run(compile),
  ]);

  if (process.argv.includes('--static')) {
    await run(render);
  }
}

export default build;
