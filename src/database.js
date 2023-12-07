import { createPool } from 'mysql';

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "pet_set_db",
    connectionLimit: 10
})


export const add_memories = (m_id, u_id, title, details, imgURL, created_date) =>{
    pool.query(`INSERT INTO pet_set_db.memories (m_id, u_id, title, details, imgURL, created_date) VALUES (${m_id},${u_id},${title},${details},${imgURL},${created_date}`, (err, result) => {
        if(err){
            return console.log(err);
        }
        return console.log(result);
    })
}

export const get_all_memories = () =>{
    pool.query(`select * from pet_set_db.memories`, (err, result) => {
        if(err){
            return err;
        }
        return result;
    })
}
    // export const add_memories()

// const add_memories = (m_id, u_id, title, details, imgURL, created_date) =>{
//     pool.query(`select * from pet_set_db.memories`, (err, result) => {
//     if(err){
//         return console.log(err);
//     }
//     return console.log(result);
// })
// }
// console.log(add_memories("1", "1","1","1","1","1"))