const fs = require('fs');
const execSync = require('child_process').execFileSync;
const config = require('./config.json');


// const bundleNames = fs.readFileSync('./images/Global/still_path_hash.txt').toString().split('\n').join(',');


// const exePath = `./AtelierTool.exe download-bundles -o ./tmp ${config.fileassets_version.Global} -b ${bundleNames}`;
const exePath = `../tools/AtelierToolBundleDownload/AtelierTool.exe`;
const args = [
    'download-bundles', config.fileassets_version.Global,
    '--platform', 'StandaloneWindows64',
    '--server', 'Global',
    '--output', './tmp',
    '--bundlepath', './images/bundlenames_android_filtered_texture2d.txt'
];

console.log('downloading and decrypting bundles');
execSync(exePath, args, { stdio: 'inherit' });
console.log('done');


