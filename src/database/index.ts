import "dotenv/config";
import { createConnection } from "typeorm";

createConnection({
  type: "mysql",
  host: process.env.RDS_HOSTNAME,
  port: 3306,
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  entities: [__dirname + "/../entities/*.ts"],
  synchronize: true,
  logging: true,
})
  .then(() => {
    console.log("Connected to the database.");
  })
  .catch((err) => console.error("Error Connected", err));
