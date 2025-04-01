import { randomUUID } from 'node:crypto'
import { Database } from './database.js'
import { buildRoutePath } from './utils/build-rout-path.js'

const database = new Database()

export const routes = [
  {
    method: "GET",
    path: buildRoutePath("/users"),
    handler: (req, res) => {
      const { search } = req.query
      const users = database.select('users', search ? {
        name: search,
        email: search
      } : null)

      return res.end(JSON.stringify(users))
    }
  },
  {
    method: "POST",
    path: buildRoutePath("/users"),
    handler: (req, res) => {
      const { name, email } = req.body

      const users = ({
        id: randomUUID(),
        name,
        email
      })

      database.insert('users', users)

      return res.writeHead(201).end()
    }
  },
  {
    method: "PUT",
    path: buildRoutePath("/users/:id"),
    handler: (req, res) => {
      const { id } = req.params
      const { name, email } = req.body
      console.log(id)

      database.update('users', id, {
        name,
        email
      })

      return res.writeHead(204).end()
    }
  },
  {
    method: "DELETE",
    path: buildRoutePath("/users/:id"),
    handler: (req, res) => {
      const { id } = req.params
      console.log(id)
      database.delete('users', id)

      return res.writeHead(204).end()
    }
  }
]