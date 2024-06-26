import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import { setupSocket } from "./src/config/socket.js";

dotenv.config();
connectDB();
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = setupSocket(server);
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
