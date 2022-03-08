"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)({
    type: "mysql",
    port: 3306,
    host: process.env.RDS_HOSTNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    username: process.env.RDS_USERNAME,
    logging: true,
    synchronize: true,
    entities: [__dirname + "/../entities/*.ts", __dirname + "/../entities/*.js"],
})
    .then(() => console.log("Connected to the database."))
    .catch((err) => console.error("Error Connected", err));
//# sourceMappingURL=index.js.map