import fs from "fs/promises"


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

  select(table) {
    return this.#database[table]
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

    task.completed_at = new Date()
    this.#persist()
  }


}