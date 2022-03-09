import { NextFunction, Request, Response } from "express";
import { ShowPokemonService } from "../../services/pokemon/ShowPokemonService";

class ShowPokemonController {
  async store(request: Request, response: Response, next: NextFunction) {
    const showPokemonService = new ShowPokemonService();

    const pokemons = await showPokemonService.findAll();

    return response.json(pokemons);
  }

  async index(request: Request, response: Response, next: NextFunction) {
    const name: string = request.params.name;

    const showPokemonService = new ShowPokemonService();

    const pokemon = await showPokemonService.findOne(name);

    return response.json(pokemon);
  }
}

export { ShowPokemonController };
