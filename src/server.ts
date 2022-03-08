import "reflect-metadata";
import "express-async-errors";
import "./database";
import "dotenv/config";

import express from "express";
import cors from "cors";

import { ExpressAssyncErrorsConfig } from "./config/expressAssyncErrorsConfig";

import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: "*" }));

app.use(routes);

app.use(ExpressAssyncErrorsConfig);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
