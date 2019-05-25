const Koa = require('koa');

import App from '../client/App.svelte';

const app = new Koa();

app.use(async ctx => {
  const { html, css, head } = App.render({ url: ctx.url });

  ctx.body = `
    <html>
    <head>${head}</head>
    <style>${css.code}</style>
    <body>
      <div id="root">${html}</div>
    </body>
    </html>
  `;
});

app.listen(3000);

console.log("Server renderer is listening on port 3000...");
