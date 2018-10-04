import * as mysql from 'mysql';
// import { resolve } from 'path';

const con = mysql.createConnection({
    host: "us-cdbr-iron-east-01.cleardb.net",
    user: "b73de7b8cfffd5",
    password: "ca0b7d3f",
    database: "heroku_c9028d96deb4c64"
});

const connectToDB = () => {
    return new Promise((resolve, reject) => {
        con.connect(function (err) {
            if (err) reject(err);
            resolve('Successfully connected to DB');
        });
    })
}

const query = (query) => {
    const con1 = mysql.createConnection({
        host: "us-cdbr-iron-east-01.cleardb.net",
        user: "b73de7b8cfffd5",
        password: "ca0b7d3f",
        database: "heroku_c9028d96deb4c64"
    });
    return new Promise((resolve, reject) => {
        con1.connect(function (err) {
            if (err) reject(err);
            con1.query(query, function (err, result) {
                if (err) reject(err);
                con1.end();
                resolve(result);
            });
        });
    })
}

const createDB = (dbname) => {
    return new Promise((resolve, reject) => {
        const con2 = mysql.createConnection({
            host: "localhost",
            user: "root",
            // password: password
        });
    })
}

export { connectToDB,
    query,
    createDB };
    