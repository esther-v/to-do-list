const express = require("express");

const listController = require("../controllers/listController");

const router = express.Router();

router.get("/", listController.findAll);
router.get("/task_lists/:id", listController.findOne);
router.post("/task_lists", listController.addOne);
router.get("/tasks/:idTask", listController.detailOne);
router.post("/task_lists/:id/tasks", listController.addOneTask);
router.post("/tasks/:id/done_update", listController.updateTaskDone);
router.get("/task_lists/:id_list/tasks/:id_task/delete", listController.deleteOne);

module.exports = router;