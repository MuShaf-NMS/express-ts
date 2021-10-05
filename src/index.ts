import express, { json } from "express"
import cors from "cors"
import db from "./db/models"
import router from "./router"
// import { persons } from "./seeders/person"

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(json())
app.use(router)
app.use(function(req, res, next) {
    console.log(`request from ${req.ip} || ${req.method} || ${req.url}`)
    next()
})

app.listen(PORT, async () => {
    try {
        await db.sequelize.sync()
    } catch (err) {
        console.log(err)
    }
    console.log(`Run on: http://localhost:${PORT}/`)
});
