import { getCustomRepository } from "typeorm";
import { PokemonRepositories } from "../../repositories/PokemonRepositories";

class ShowPokemonService {
  async findAll() {
    const pokemonRepository = getCustomRepository(PokemonRepositories);

    const pokemons = await pokemonRepository.find();

    if (!pokemons) throw new Error("Seu arremesso falhou! Pokébola vázia.");

    return pokemons;
  }

  async findOne(name: string) {
    const pokemonRepository = getCustomRepository(PokemonRepositories);

    const pokemon = await pokemonRepository.findOne(name);

    if (!pokemon) throw new Error("Seu arremesso falhou! Pokébola vázia.");

    return pokemon;
  }
}

export { ShowPokemonService };
