"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)({
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
//# sourceMappingURL=index.js.map