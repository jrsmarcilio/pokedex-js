import { EntityRepository, Repository } from "typeorm";
import { Pokemon } from "../entities/PokemonEntities";

@EntityRepository(Pokemon)
class PokemonRepositories extends Repository<Pokemon> {}

export { PokemonRepositories };
