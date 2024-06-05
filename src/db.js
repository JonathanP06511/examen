import pg from 'pg';

export const pool= new pg.Pool({
    user: "postgres",
    host: "localhost",
    password: "123456",
    database: "music",
    port: "5432"
});
