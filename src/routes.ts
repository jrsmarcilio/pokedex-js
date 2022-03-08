import { Router, Request, Response } from "express";

import { CreatePokemonController } from "./controller";

const createPokemonController = new CreatePokemonController();

const routes = Router();

routes.post("/pokemon", createPokemonController.handle);
routes.post("/", (req: Request, res: Response) =>
  res.sendStatus(200).json({ application: "running" })
);

export { routes };
