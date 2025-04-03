


export function extractQuery(search) {
  return Object.fromEntries(
    search.substring(1).split("&").map(query => query.split("="))
  )
}