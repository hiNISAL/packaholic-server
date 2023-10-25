import Koa from 'koa';
import Router from 'koa-router';
import { koaBody } from 'koa-body';
import { runner } from 'packaholic';

// -------------------------------------------------------------------------

const app = new Koa();

// -------------------------------------------------------------------------

app.use(koaBody());

// -------------------------------------------------------------------------

const router = new Router();

router.post('/pack', async (ctx) => {
  const { body } = ctx.request;
  const { source } = body;

  runner({
    source,
    context: {
      env: 'development',
    },
  });

  ctx.body = {
    code: 1,
    message: 'task running',
    data: {},
  };
});

app.use(router.routes());

// -------------------------------------------------------------------------

app.listen(3001);
