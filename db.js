// const postgres = require('postgres');
require('dotenv').config();
const { Pool } = require('pg');

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD,PGPORT } = process.env;
const pool = new Pool({
    user : PGUSER,
    password : PGPASSWORD,
    host : PGHOST,
    port : PGPORT,
    database : PGDATABASE,
    ssl : true
})

module.exports = pool;

// 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