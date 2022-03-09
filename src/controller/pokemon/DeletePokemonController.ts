import { Request, Response } from "express";
import { DeletePokemonService } from "../../services/pokemon/DeletePokemonService";

class DeletePokemonController {
  async _delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.query;

    const deletePokemonService = new DeletePokemonService();

    const pokemon = await deletePokemonService.destroy(Number(id));

    return response
      .status(200)
      .json({ message: `${pokemon.name} deletado com sucesso.` });
  }
}

export { DeletePokemonController };
