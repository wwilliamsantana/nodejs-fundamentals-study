import fs from "fs/promises"
import { title } from "process"


export class Database {
  #database = {}

  constructor() {
    fs.readFile("db.json", "utf-8")
      .then(data => {
        this.#database = JSON.parse(data)
      }).catch(() => {
        this.#persist()
      })
  }

  #persist() {
    fs.writeFile("db.json", JSON.stringify(this.#database))
  }

  select(table, search) {
    let tasks = this.#database[table] ?? []

    if (search) {
      tasks = tasks.filter(task => {
        return Object.entries(search).some(([key, value]) => {
          return task[key].toLowerCase().includes(value.toLowerCase())
        })
      })
    }

    return tasks
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }

    this.#persist()
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id)
    if (rowIndex === -1) {
      throw new Error("Row not found")
    }
    this.#database[table].splice(rowIndex, 1)
    this.#persist()
  }

  completeTask(table, id) {
    const task = this.#database[table].find(task => task.id === id)

    if (!task) {
      throw new Error("Task not found")
    }

    task.completed_at = task.completed_at ? null : new Date()


    this.#persist()
  }

  update(table, id, data) {
    const task = this.#database[table].find(task => task.id === id)

    if (!task) {
      throw new Error("Task not found")
    }

    const taskUpdate = {
      ...data,
      title: data.title ?? task.title,
      description: data.description ?? task.description,
      update_at: new Date()
    }

    Object.assign(task, taskUpdate)
    this.#persist()
  }



}