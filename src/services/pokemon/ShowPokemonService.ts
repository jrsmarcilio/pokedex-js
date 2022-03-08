import { getCustomRepository } from "typeorm";
import { PokemonRepositories } from "../../repositories/PokemonRepositories";

class ShowPokemonService {
  async index() {
    const pokemonRepository = getCustomRepository(PokemonRepositories);

    const pokemons = await pokemonRepository.find();

    if (!pokemons) throw new Error("Seu arremesso falhou! Pokébola vázia.");

    return pokemons;
  }
}

export { ShowPokemonService };
