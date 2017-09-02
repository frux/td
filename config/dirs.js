const path = require('path');

const ROOT = path.resolve(__dirname, '../');
const SRC = path.resolve(ROOT, 'src');
const BUILD = path.resolve(ROOT, 'build');

module.exports = {
    ROOT,
    SRC,
    BUILD
};