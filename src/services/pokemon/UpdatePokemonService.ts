import { getCustomRepository } from "typeorm";
import { PokemonRepositories } from "../../repositories/PokemonRepositories";
import { IPokemon } from "../../interface/PokemonInterface";

class UpdatePokemonService {
  async updated({
    id,
    name,
    image,
    attack,
    defense,
    primaryPower,
    secondaryPower,
  }: IPokemon) {
    const pokemonRepository = getCustomRepository(PokemonRepositories);

    const pokemon = await pokemonRepository.findOne(id);

    if (!pokemon) throw new Error("O Arremesso falhou! Pokébola vázia.");

    const pokemonUpdated = await pokemonRepository.update(
      { id },
      {
        name: name || pokemon.name,
        image: image || pokemon.image,
        attack: attack || pokemon.attack,
        defense: defense || pokemon.defense,
        primaryPower: primaryPower || pokemon.primaryPower,
        secondaryPower: secondaryPower || pokemon.secondaryPower,
      }
    );

    return pokemonUpdated;
  }
}

export { UpdatePokemonService };
