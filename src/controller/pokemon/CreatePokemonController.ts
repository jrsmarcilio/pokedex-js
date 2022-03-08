import { NextFunction, Request, Response } from "express";
import { CreatePokemonService } from "../../services/pokemon/CreatePokemonService";

class CreatePokemonController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { attack, defense, image, name, primaryPower, secondaryPower } =
      request.body;

    const createPokemonService = new CreatePokemonService();

    const pokemon = await createPokemonService.execute({
      attack,
      defense,
      image,
      name,
      primaryPower,
      secondaryPower,
    });

    return response.json(pokemon);
  }
}

export { CreatePokemonController };
