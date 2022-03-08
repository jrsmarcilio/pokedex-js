export interface IPokemon {
  id?: number;
  name: string;
  image: string;
  attack: number;
  defense: number;
  primaryPower: string;
  secondaryPower?: string;
}
