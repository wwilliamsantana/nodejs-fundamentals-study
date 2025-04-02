import http from 'http';
import { routes } from './routes.js';


const server = http.createServer((req, res) => {
  const { url, method } = req;

  const route = routes.find((route) => {
    return route.method === method && route.path === url;
  })

  if (route) {
    return route.handler(req, res);
  }

  return res.write(404).end()
})


server.listen(3030)