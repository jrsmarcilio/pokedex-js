import { getCustomRepository } from "typeorm";
import { Pokemon } from "../../entities/PokemonEntities";
import { PokemonRepositories } from "../../repositories/PokemonRepositories";

class DeletePokemonService {
  async destroy(id: number): Promise<Pokemon> {
    const pokemonRepository = getCustomRepository(PokemonRepositories);

    if (!id) throw new Error("Id incorrect");

    const pokemonExists = await pokemonRepository.findOne({ id });

    if (!pokemonExists) throw new Error(`Pokemon não encontrado.`);

    return await pokemonRepository.remove(pokemonExists);
  }
}

export { DeletePokemonService };
