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
exports.CreatePokemon1646680887984 = void 0;
const typeorm_1 = require("typeorm");
class CreatePokemon1646680887984 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "pokemons",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "20",
                        isNullable: false,
                    },
                    {
                        name: "image",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "attack",
                        type: "int",
                        isNullable: false,
                        length: "4"
                    },
                    {
                        name: "defence",
                        type: "int",
                        isNullable: false,
                        length: "4"
                    },
                    {
                        name: "primaryPower",
                        type: "varchar",
                        length: "10",
                    },
                    {
                        name: "secondaryPower",
                        type: "varchar",
                        length: "10",
                    },
                ],
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.CreatePokemon1646680887984 = CreatePokemon1646680887984;
//# sourceMappingURL=1646680887984-CreatePokemon.js.map