import {createPool} from 'mysql2/promise'

export const pool = createPool(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database : 'calendario'
});

// pool.connect(function (error) {
//     if (error) {
//         throw error;

//     } else {
//         console.log("Conexion exitosa");
//     }
// })
