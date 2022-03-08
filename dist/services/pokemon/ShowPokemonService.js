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
exports.ShowPokemonService = void 0;
const typeorm_1 = require("typeorm");
const PokemonRepositories_1 = require("../../repositories/PokemonRepositories");
class ShowPokemonService {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemonRepository = (0, typeorm_1.getCustomRepository)(PokemonRepositories_1.PokemonRepositories);
            const pokemons = yield pokemonRepository.find();
            if (!pokemons)
                throw new Error("Seu arremesso falhou! Pokébola vázia.");
            return pokemons;
        });
    }
}
exports.ShowPokemonService = ShowPokemonService;
//# sourceMappingURL=ShowPokemonService.js.map