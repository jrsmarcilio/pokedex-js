import { getCustomRepository } from "typeorm";
import { IPokemon } from "../../interface/PokemonInterface";
import { PokemonRepositories } from "../../repositories/PokemonRepositories";

class CreatePokemonService {
  async execute({
    attack,
    defense,
    image,
    name,
    primaryPower,
    secondaryPower,
  }: IPokemon) {
    const pokemonRepository = getCustomRepository(PokemonRepositories);

    if (
      !attack ||
      !defense ||
      !image ||
      !name ||
      !primaryPower ||
      !secondaryPower
    )
      throw new Error("Incomplete pokemon data");

    const pokemonAlreadExists = await pokemonRepository.findOne({ name });

    if (pokemonAlreadExists) throw new Error("Pokemon already exists");

    const pokemon = pokemonRepository.create({
      attack,
      defense,
      image,
      name,
      primaryPower,
      secondaryPower,
    });

    await pokemonRepository.save(pokemon);

    return { name };
  }
}

export { CreatePokemonService };
