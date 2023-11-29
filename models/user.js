<<<<<<< HEAD
const sqlite = require("sqlite3").verbose();
const db = new sqlite3.Database("test.sqlite");

const sql =
  "CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL, password TEXT NOT NULL, age INTEGER NOT NULL)";

db.run(sql);
class User {
  constructor() {}

  static create() {}
  static findByEmail(email) {}
}
=======
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(test.sqlite);

const sql = "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL, password TEXT NOT NULL, age INTEGER NOT NULL)";

db.run(sql)

class User{

constructor(){}

static create(){};

static findByEmail(email){};

}
>>>>>>> ad2c53feb8e582607d5fe87acc227d40def038f4
