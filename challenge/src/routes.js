
const tasks = [{
  id: 1,
  title: "Task 1",
}]

export const routes = [
  {
    method: "GET",
    path: "/tasks",
    handler: (req, res) => {
      return res.end(JSON.stringify(tasks))
    }
  }
]