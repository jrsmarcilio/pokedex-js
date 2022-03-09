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
exports.UpdatePokemonService = void 0;
const typeorm_1 = require("typeorm");
const PokemonRepositories_1 = require("../../repositories/PokemonRepositories");
class UpdatePokemonService {
    updated({ id, name, image, attack, defense, primaryPower, secondaryPower, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemonRepository = (0, typeorm_1.getCustomRepository)(PokemonRepositories_1.PokemonRepositories);
            const pokemon = yield pokemonRepository.findOne(id);
            if (!pokemon)
                throw new Error("O Arremesso falhou! Pokébola vázia.");
            const pokemonUpdated = yield pokemonRepository.update({ id }, {
                name: name || pokemon.name,
                image: image || pokemon.image,
                attack: attack || pokemon.attack,
                defense: defense || pokemon.defense,
                primaryPower: primaryPower || pokemon.primaryPower,
                secondaryPower: secondaryPower || pokemon.secondaryPower,
            });
            return pokemonUpdated;
        });
    }
}
exports.UpdatePokemonService = UpdatePokemonService;
//# sourceMappingURL=UpdatePokemonService.js.map