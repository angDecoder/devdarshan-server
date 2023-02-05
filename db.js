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
'PGPASSWORD=QCBpAU3VAp9zAuzWL4uB7pZ3rTZJfYmW psql -h dpg-cffko402i3mg6p91udfg-a.oregon-postgres.render.com -U devdarshan_user devdarshan'
'postgres://devdarshan_user:QCBpAU3VAp9zAuzWL4uB7pZ3rTZJfYmW@dpg-cffko402i3mg6p91udfg-a/devdarshan'
module.exports = pool;

// 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