"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const createPokemonController = new controller_1.CreatePokemonController();
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.post("/pokemon", createPokemonController.handle);
routes.post("/", (req, res) => res.sendStatus(200).json({ application: "running" }));
//# sourceMappingURL=routes.js.map