const { response } = require("express");
const List = require("../models/lists");
const Task = require("../models/lists");

exports.findAll = (request, response) => {
  List.getAll((error, lists) => {
    if (error) {
      response.send(error.message);
    }
    
    response.render("home.ejs", { lists });
  });
}

exports.findOne = (request, response) => {
  const { id } = request.params;

  List.getOne(id, (error, result) => {
    if (error) {
      response.send(error.message);
    }
    const tasks = result;
    const listName = result[0].Name;

    response.render("list_details.ejs", { listName, tasks });
  });
}

exports.addOne = (request, response) => {
  List.create(request.body, (error, result) => {
    if (error) {
      response.send(error.message);
    }

    response.redirect("/");
  })
}

exports.detailOne = (request, response) => {
  const { idTask } = request.params;

  Task.describe(idTask, (error, result) => {
    if (error) {
      response.send(error.message);
    }
    
    const taskDetail = result[0];
    const taskName = result[0].Description;
   
    response.render("tasks.ejs", { taskName, taskDetail });
  });
}

exports.addOneTask = (request, response) => {
  const { id } = request.params;
  Task.createTask(id, request.body, (error, result) => {
    if (error) {
      response.send(error.message);
    }
    
    response.redirect(`/task_lists/${id}`);
  })
}

exports.updateTaskDone = (request, response) => {
  const { id } = request.params;

  Task.taskDone(id, (error, result) => {
    if (error) {
      response.send(error.message);
    }
    
    response.redirect(`/tasks/${id}`);
  })
}

exports.deleteOne = (request, response) => {
  const { id_task, id_list } = request.params;
  
  Task.deleteTask(id_task, request.body, (error, result) => {
    if (error) {
      response.send(error.message);
    }
    
    response.redirect(`/task_lists/${id_list}`);
  })
}