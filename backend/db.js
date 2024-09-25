import pg from 'pg';
const pool = new pg.Client({
    user:"anmoldwivedi",
    host:"localhost",
    database:"luxe_curry_restaurant",
    port:5432
});
 
pool.connect() 
.then(() => { console.log('Connected to PostgreSQL database!'); }) 
.catch((err) => { console.error('Error connecting to the database:', err); });
export {pool};