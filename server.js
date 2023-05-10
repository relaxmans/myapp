// /*
//  * @Author       : haocanweng@chatlabs.com
//  * @Date         : 2022-10-28 10:18:17
//  * @LastEditors  : haocanweng@chatlabs.com
//  * @LastEditTime : 2022-10-28 13:52:12
//  * @FilePath     : /my-app/server.js
//  */
// const Koa = require("koa2");
// const next = require("next");
// const koaBody = require("koa-body");
// const k2c = require("koa2-connect");
// const proxyMiddleware = require("http-proxy-middleware");
// const cors = require("koa2-cors");
// const port = 3007;
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// const proxyOptions = {
//   // 代理配置：可配置多个
//   "/huyi": {
//     target:
//       process.env.SERV_ENV === "release"
//         ? "https://huyitool.jidiandian.cn"
//         : "https://testhuyitool.jidiandian.cn",
//     pathRewrite: {
//       "^/huyi": "",
//     },
//     changeOrigin: true,
//     logLevel: "debug",
//   },
//   "/scene": {
//     target:
//       process.env.SERV_ENV === "release"
//         ? "https://ibestfanli.com"
//         : "https://test.ibestfanli.com",
//     pathRewrite: {
//       "^/scene": "",
//     },
//     changeOrigin: true,
//     logLevel: "debug",
//   },
// };
// app.prepare().then(() => {
//   const server = new Koa();

//   server.use(cors());
//   /* if (dev && proxyOptions) {
//     Object.keys(proxyOptions).forEach(function (context) {
//       server.use(async (ctx, next) => {
//         if (ctx.url.startsWith(context)) {
//           ctx.respond = false;
//           await k2c(proxyMiddleware(context, proxyOptions[context]))(ctx, next);
//         }
//         await next();
//       });
//     });
//   } */
//   server.use(koaBody()).use(async (ctx, next) => {
//     await handle(ctx.req, ctx.res);
//     ctx.respond = false;
//   });
//   server.on("error", (err, ctx) => {
//     if (ctx) {
//       ctx.body = {
//         code: 9999,
//         message: `程序运行出错：${err}`,
//       };
//     }
//   });
//   server.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${port}/index`);
//   });
// });
const Koa = require("koa");
const next = require("next");
const Router = require("@koa/router");

const port = 3007;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.all("(.*)", async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
