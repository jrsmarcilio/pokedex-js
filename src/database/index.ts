import "dotenv/config";
import { createConnection } from "typeorm";

createConnection({
  database: process.env.RDS_DB_NAME,
  host: process.env.RDS_HOSTNAME,
  password: process.env.RDS_PASSWORD,
  port: 3306,
  type: "mysql",
  username: process.env.RDS_USERNAME,
  
  logging: true,
  migrationsRun: true,
  synchronize: false,
  
  entities: [__dirname + "/../entities/*.js"],
  migrations: [__dirname + "/./migrations/*.js"],
})
  .then(() => {
    console.log("Connected to the database.");
  })
  .catch((err) => console.error("Error Connected", err));
