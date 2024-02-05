const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("test.sqlite");

// Создание таблицы, если она не существует
const sql =
  "CREATE TABLE IF NOT EXISTS entries(id INTEGER PRIMARY KEY AUTOINCREMENT,username TEXT NOT NULL, title TEXT, content TEXT NOT NULL)";
db.run(sql);

class Entry {
  constructor() {}

  // Создание новой записи
  static create(data) {
    const sql =
      "INSERT INTO entries (username, title, content) VALUES (?, ?, ?)";
    db.run(sql, data.username, data.title, data.content);
  }

  // Получение всех записей
  static selectAll(cb) {
    db.all("SELECT * FROM entries", cb);
  }

  // Получение записи по идентификатору
  static getEntryById(entryId, cb) {
    const sql = "SELECT * FROM entries WHERE id = ?";
    db.get(sql, entryId, cb);
  }

  // Удаление записи по идентификатору
  static delete(entryId, cb) {
    const sql = "DELETE FROM entries WHERE id = ?";
    db.run(sql, entryId, function (err) {
      if (err) {
        return cb(err);
      }
      cb(null);
    });
  }

  // Обновление записи по идентификатору
  static update(entryId, newData, cb) {
    // Проверка существования записи
    const checkExistenceSql = "SELECT * FROM entries WHERE id = ?";
    db.get(checkExistenceSql, entryId, (err, row) => {
      if (err) {
        return cb(err);
      }

      if (!row) {
        return cb(new Error("Entry not found"));
      }

      // Обновление записи
      const updateSql =
        "UPDATE entries SET title = ?, content = ? WHERE id = ?";
      db.run(updateSql, newData.title, newData.content, entryId, cb);
    });
  }
}

module.exports = Entry;
