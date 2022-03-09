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
exports.UpdatePokemonController = void 0;
const UpdatePokemonService_1 = require("../../services/pokemon/UpdatePokemonService");
class UpdatePokemonController {
    edit(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, image, attack, defense, primaryPower, secondaryPower } = request.body;
            const { id } = request.params;
            console.log(id);
            const updatePokemonService = new UpdatePokemonService_1.UpdatePokemonService();
            yield updatePokemonService.updated({
                id: Number(id),
                name,
                image,
                attack,
                defense,
                primaryPower,
                secondaryPower,
            });
            return response
                .status(200)
                .json({ message: "Pokemon updated successfully." });
        });
    }
}
exports.UpdatePokemonController = UpdatePokemonController;
//# sourceMappingURL=UpdatePokemonController.js.map