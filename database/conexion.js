var mysql = require('mysql2');

var conexion = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database : 'calendario'
});

conexion.connect(function (error) {
    if (error) {
        throw error;

    } else {
        console.log("Conexion exitosa");
    }
})

conexion.end()