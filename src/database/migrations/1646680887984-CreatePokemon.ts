import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePokemon1646680887984 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
