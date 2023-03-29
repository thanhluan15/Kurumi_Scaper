/** @format */

import { PrismaClient } from "@prisma/client";
import express from "express";
import userRoutes from "./routes/users";
import postRoutes from "./routes/posts";
import profileRoutes from "./routes/profile";
import commentRoutes from "./routes/comments";
import authRoutes from "./routes/auth";
import cors from "cors"
import "dotenv/config";

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 3001
async function main() {}

app.use(cors())

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/comments", commentRoutes);

main()
  .then(async () => prisma.$disconnect)
  .catch(async (e) => {
    console.log(e);
    prisma.$disconnect;
  });

app.listen(PORT, () => {
  console.log("Backend server is running");
});
