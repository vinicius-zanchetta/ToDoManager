import express from 'express';
const router = express.Router();

import TaskController from '../controllers/TaskController.js'

router.get('/', TaskController.showTasks)
router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.get('/edit/:id', TaskController.updateTask)
router.post('/edit', TaskController.updateTaskPost)
router.post('/updatestatus', TaskController.toggleTaskStatus)
router.post('/remove', TaskController.removeTask)

export default router