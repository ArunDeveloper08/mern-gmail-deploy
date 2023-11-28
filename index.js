import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./database/db.js";
import routes from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";


const  __dirname = path.resolve();
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", routes);
app.use(express.static(path.join(__dirname, "./gmail/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./gmail/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});
dbConnect();
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`sever is running on  port ${PORT}`));
