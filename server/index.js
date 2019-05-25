import App from '../client/App.svelte';

const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  const { html, css, head } = App.render({ url: ctx.url });

  ctx.body = `
    <html>
    <head>
      ${head}
      <style>${css.code}</style>
    </head>
    <body>
      <div id="root">${html}</div>
    </body>
    </html>
  `;
});

app.listen(3000);

console.log('Server renderer is listening on port 3000...');
