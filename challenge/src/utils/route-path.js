
//Trasnformar o caminho da rota em uma regex para validar os parâmetros da rota
// Exemplo: /tasks/:id -> /^\/tasks\/(?<id>[a-z0-9-_]+)(?<query>\?(.*))?$/

export function routePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g
  const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')
  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

  return pathRegex
}