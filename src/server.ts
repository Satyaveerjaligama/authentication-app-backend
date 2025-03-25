import express from "express";
import userRouters from "./routes/v1/userRoutes";
import cors from "cors";
import { dbConnection } from "./config/db";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

dbConnection();

app.get("/test", (req, res) => {
  res.send("Hello World");
});

app.use("/user/v1", userRouters);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
