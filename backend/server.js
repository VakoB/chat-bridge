import express, { response } from "express";
import "dotenv/config";
import cors from "cors";
import "./configs/lemon.js"; // lemonsqueezy setup
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import chatRouter from "./routes/chatRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import creditRouter from "./routes/creditRoutes.js";
import webhookRouter from "./routes/webhookRoutes.js";

const app = express();

connectDB()

// middleware
app.use(cors());

app.use("/api/webhook", express.raw({ type: "application/json" }));
app.use(express.json());

// routes
app.get("/", (req, res) => res.send("Server is Live!"));
app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use("/api/message", messageRouter);
app.use("/api/credits", creditRouter);
app.use("/api/webhook", webhookRouter);
//app.use("/api/webhook", express.raw({ type: "application/json" }));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
