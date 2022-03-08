"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const createPokemonController = new controller_1.CreatePokemonController();
const showPokemonController = new controller_1.ShowPokemonController();
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.post("/pokemon", createPokemonController.handle);
routes.get("/pokemon", showPokemonController.store);
//# sourceMappingURL=routes.js.map