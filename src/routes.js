import { randomUUID } from 'node:crypto'
import { Database } from './database.js'

const database = new Database()

export const routes = [
  {
    method: "GET",
    url: "/users",
    handler: (req, res) => {
      const users = database.select('users')

      return res.end(JSON.stringify(users))
    }
  },
  {
    method: "POST",
    url: "/users",
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
  }
]