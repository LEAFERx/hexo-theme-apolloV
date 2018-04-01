let spawn = require('hexo-util/lib/spawn');

hexo.on('new', (data) => {
  spawn('code', [hexo.base_dir, data.path]);
});