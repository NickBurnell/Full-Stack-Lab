"use strict";
const pg = require("pg");
const pool = new pg.Pool({
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5950,
    database: "ExpressShopDB",
    ssl: false
});

module.exports = pool;