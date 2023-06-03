import { Schema, model, Document, Model } from 'mongoose';

export interface ITodo extends Document {
    title: string;
    completed: boolean;
}

const todoSchema = new Schema<ITodo>({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

export const TodoModel: Model<ITodo> = model<ITodo>('Todo', todoSchema);
