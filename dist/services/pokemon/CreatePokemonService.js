"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePokemonService = void 0;
const typeorm_1 = require("typeorm");
const PokemonRepositories_1 = require("../../repositories/PokemonRepositories");
class CreatePokemonService {
    execute({ attack, defense, image, name, primaryPower, secondaryPower, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemonRepository = (0, typeorm_1.getCustomRepository)(PokemonRepositories_1.PokemonRepositories);
            if (!attack ||
                !defense ||
                !image ||
                !name ||
                !primaryPower ||
                !secondaryPower)
                throw new Error("Incomplete pokemon data");
            const pokemonAlreadExists = yield pokemonRepository.findOne({ name });
            if (pokemonAlreadExists)
                throw new Error("Pokemon already exists");
            const pokemon = pokemonRepository.create({
                attack,
                defense,
                image,
                name,
                primaryPower,
                secondaryPower,
            });
            yield pokemonRepository.save(pokemon);
            return { name };
        });
    }
}
exports.CreatePokemonService = CreatePokemonService;
//# sourceMappingURL=CreatePokemonService.js.map