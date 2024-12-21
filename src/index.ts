import express from "express";
import bodyParser from "body-parser";
import { userRoutes } from "./web/express/routes/artigoRoutes.js";

const app = express();
app.use(bodyParser.json());

app.use("/api", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
