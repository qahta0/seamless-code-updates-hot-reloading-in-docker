import { Request, Response } from 'express';
import { ITodo, TodoModel } from '../models/todo.model';

export const getAllTodos = async (req: Request, res: Response): Promise<void> => {
    try {
        const todos: ITodo[] = await TodoModel.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const createTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, completed } = req.body;
        console.log(title, completed)
        const newTodo: ITodo = await TodoModel.create({ title, completed });
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getTodoById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: string = req.params.id;
        const todo: ITodo | null = await TodoModel.findById(id);
        if (todo) {
            res.status(200).json(todo);
        } else {
            res.status(404).json({ message: 'Todo not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const updateTodoById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: string = req.params.id;
        const { title, completed } = req.body;
        const updatedTodo: ITodo | null = await TodoModel.findByIdAndUpdate(id, { title, completed }, { new: true });
        if (updatedTodo) {
            res.status(200).json(updatedTodo);
        } else {
            res.status(404).json({ message: 'Todo not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const deleteTodoById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: string = req.params.id;
        const deletedTodo: ITodo | null = await TodoModel.findByIdAndDelete(id);
        if (deletedTodo) {
            res.status(200).json(deletedTodo);
        } else {
            res.status(404).json({ message: 'Todo not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
