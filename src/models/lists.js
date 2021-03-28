const db = require("../db");

exports.getAll = (callback) => {
  db.query("SELECT * FROM task_lists", (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}

exports.getOne = (id, callback) => {
  db.query(`SELECT * FROM task_lists INNER JOIN tasks ON task_lists.Id = tasks.task_lists_id WHERE task_lists.Id = ${id};`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}

exports.create = (list, callback) => {
  db.query(`INSERT INTO task_lists (Name) VALUES ("${list.name}");`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
    
    callback(null, result);
  })
}

exports.describe = (idTask, callback) => {
  db.query(`SELECT * , DATE_FORMAT(Creation_date, "%d / %m / %Y" )AS "Date" FROM tasks WHERE Id = ${idTask};`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}

exports.createTask = (id, task, callback) => {
  db.query(`INSERT INTO tasks (Description, Creation_date, Done, task_lists_id) VALUES ("${task.description}", now(), false, ${id} );`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
    
    callback(null, result);
  })
}

exports.taskDone = (id, callback) => {
  db.query(`UPDATE tasks SET Done = !Done WHERE Id = ${id};`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
    
    callback(null, result);
  })
}

exports.deleteTask = (id_task, callback) => {
  db.query(`DELETE FROM tasks WHERE Id = ${id_task};`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
    
    callback(null, result);
  })
}



