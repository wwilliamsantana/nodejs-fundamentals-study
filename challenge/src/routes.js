import { Database } from "./database.js"
import { randomUUID } from "node:crypto"
import { routePath } from "./utils/route-path.js"

const database = new Database()

export const routes = [
  {
    method: "GET",
    path: routePath("/tasks"),
    handler: (req, res) => {

      const tasks = database.select("tasks")

      return res.end(JSON.stringify(tasks))
    }
  },
  {
    method: "POST",
    path: routePath("/tasks"),
    handler: (req, res) => {
      const { title, description } = req.body

      const task = {
        id: randomUUID(),
        title,
        description,
        completed_at: null,
        update_at: null,
        created_at: new Date(),
      }

      database.insert("tasks", task)

      return res.writeHead(201).end()
    }
  },
  {
    method: "DELETE",
    path: routePath("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params
      database.delete("tasks", id)
      return res.writeHead(204).end()
    }
  }
]