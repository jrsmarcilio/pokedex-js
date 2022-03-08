import { Router } from "express";

import { CreatePokemonController, ShowPokemonController } from "./controller";

const createPokemonController = new CreatePokemonController();
const showPokemonController = new ShowPokemonController();

const routes = Router();

routes.post("/pokemon", createPokemonController.handle);
routes.get("/pokemon", showPokemonController.store);

export { routes };
