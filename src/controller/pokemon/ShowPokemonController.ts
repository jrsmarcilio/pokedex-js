import { NextFunction, Request, Response } from "express";
import { ShowPokemonService } from "../../services/pokemon/ShowPokemonService";

class ShowPokemonController {
  async store(request: Request, response: Response, next: NextFunction) {
    const showPokemonService = new ShowPokemonService();

    const pokemons = await showPokemonService.index();

    return response.json(pokemons);
  }
}

export { ShowPokemonController };
