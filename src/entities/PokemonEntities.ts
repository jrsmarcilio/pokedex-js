import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "pokemons" })
class Pokemon {
  @PrimaryGeneratedColumn("increment")
  readonly id: number;

  @Column({ nullable: false, unique: true })
  name: string;

  @Column({ nullable: false })
  image: string;

  @Column({ nullable: false })
  attack: number;

  @Column({ nullable: false })
  defense: number;

  @Column({ name: "primaryPower", nullable: false })
  primaryPower: string;

  @Column({ name: "secondaryPower", nullable: false })
  secondaryPower: string;
}

export { Pokemon };
