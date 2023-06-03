import express, { Router } from 'express';
import {
    getAllTodos,
    createTodo,
    getTodoById,
    updateTodoById,
    deleteTodoById,
} from '../controllers/todos.controllers';

const router: Router = express.Router();

router.get('/', getAllTodos);
router.post('/', createTodo);
router.get('/:id', getTodoById);
router.put('/:id', updateTodoById);
router.delete('/:id', deleteTodoById);

export default router;
