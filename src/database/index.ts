import "dotenv/config";
import { createConnection } from "typeorm";

createConnection({
  type: "mysql",
  host: "172.17.0.2",
  port: 3306,
  username: "root",
  password: "34544615",
  database: "pokemon_db",
  entities: [__dirname + "/../entities/*.js"],
  synchronize: true,
  logging: true,
})
  .then(() => {
    console.log("Connected to the database.");
  })
  .catch((err) => console.error("Error Connected", err));
