const path = require('path');
const fs = require('fs');

const projectDirectory = fs.realpathSync(process.cwd());
const resolveProject = (relativePath) => path.resolve(projectDirectory, relativePath);

module.exports = {
    appIndex: resolveProject('src/client/Index.tsx'),
    appIndexTemplate: resolveProject('src/client/index.html'),
    tsconfig: resolveProject('tsconfig.json'),

    appBuildDev: resolveProject('build'),
    appBuildProd: resolveProject('dist'),

    webpackConfigDev: resolveProject('config/webpack.dev.js'),
    webpackConfigProd: resolveProject('config/webpack.prod.js'),

    publicPathDev: '/',
    // Also see package.json configuration of reactSnap
    publicPathProd: '/courses/cse510/22wi/',
};
