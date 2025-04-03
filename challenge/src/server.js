import http from 'http';
import { routes } from './routes.js';
import { buffer } from './middleware/buffer.js';
import { extractQuery } from './utils/extractQuery.js';


const server = http.createServer(async (req, res) => {
  const { url, method } = req

  await buffer(req, res)

  const route = routes.find((route) => {
    return route.method === method && route.path.test(url);
  })

  if (route) {
    const routeParams = req.url.match(route.path)
    const { query, ...params } = routeParams.groups

    req.params = params
    req.query = query ? extractQuery(query) : {}

    return route.handler(req, res);
  }

  return res.write(404).end()
})


server.listen(3030)