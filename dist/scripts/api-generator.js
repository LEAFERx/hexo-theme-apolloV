let _ = require('lodash');

function generateConfig() {
  let siteConfig = hexo.config;
  let themeConfig = hexo.theme.config;

  return {
    siteConfig,
    themeConfig,
  };
}

function generatePostlist() {
  return hexo.locals
    .get('posts')
    .filter(({ published }) => published)
    .map((post) => {
      let data = _.pick(post, [
        'path',
        'title',
        'date',
        'updated',
        'excerpt',
      ])
      data.path = `/${data.path}`;
      return data;
    })
    .sort((a, b) => {
      return b.date - a.date;
    });
}

function generatePosts() {
  return hexo.locals
    .get('posts')
    .filter(({ published }) => published)
    .map((post) => {
      let prev = post.prev;
      while (prev && !prev.published) {
        prev = prev.prev;
      }
      let next = post.next;
      while (next && !next.published) {
        next = next.next;
      }
      post.prev = prev ? `${prev.path}` : '';
      post.next = next ? `${next.path}` : '';
      let data = _.pick(post, [
        'path',
        'title',
        'date',
        'updated',
        'content',
        'prev',
        'next',
      ]);
      data.path = `/${data.path}`;
      return {
        path: `api${data.path}index.json`,
        data: JSON.stringify(data),
      }
    });
}

function apiGenerator() {
  let apis = [];

  let config = generateConfig();
  let postlist = generatePostlist();
  let posts = generatePosts();

  apis.push({
    path: 'api/config.json',
    data: JSON.stringify(config),
  });

  apis.push({
    path: 'api/postlist.json',
    data: JSON.stringify(postlist),
  });

  apis = apis.concat(posts);

  return apis;
}

hexo.extend.generator.register('api-generator', apiGenerator);