import { Router } from "express";

import {
  CreatePokemonController,
  DeletePokemonController,
  ShowPokemonController,
  UpdatePokemonController,
} from "./controller";

const createPokemonController = new CreatePokemonController();
const showPokemonController = new ShowPokemonController();
const updatePokemonController = new UpdatePokemonController();
const deletePokemoncontroller = new DeletePokemonController();

const routes = Router();

routes.post("/pokemon", createPokemonController.handle);
routes.get("/pokemon", showPokemonController.store);
routes.put("/pokemon", updatePokemonController.edit);
routes.delete("/pokemon", deletePokemoncontroller._delete);

export { routes };
