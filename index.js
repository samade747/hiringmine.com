import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { dbConnection } from "./db/config.js"
import userRoutes from "./routes/user.js"
import authRoutes from "./routes/auth.js"
import jobRoutes from "./routes/job.js"
import categoriesRoute from "./routes/categories.js"

const app = express()
dotenv.config()

app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    withCredentials: true,
}))

app.use(cookieParser())
dbConnection()
const PORT = process.env.PORT || 5000
app.get("/", (req, res) => {
    res.send("HiringMine API")
})  

app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/job", jobRoutes)
app.use("/api/categories", categoriesRoute)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})  