const app = require("./src/app")
const {database} = require("./src/db")

console.log(database.sync().then((res)=> {
  app.listen(3001, () => {
    console.log("listening on port 3001")
  })
}))

