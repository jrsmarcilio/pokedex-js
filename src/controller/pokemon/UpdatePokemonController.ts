import { NextFunction, Request, Response } from "express";
import { UpdatePokemonService } from "../../services/pokemon/UpdatePokemonService";

class UpdatePokemonController {
  async edit(request: Request, response: Response, next: NextFunction) {
    const { name, image, attack, defense, primaryPower, secondaryPower } =
      request.body;

    const { id } = request.query;
    
    const updatePokemonService = new UpdatePokemonService();

    await updatePokemonService.updated({
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
  }
}

export { UpdatePokemonController };
