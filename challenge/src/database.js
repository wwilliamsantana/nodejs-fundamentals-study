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
}