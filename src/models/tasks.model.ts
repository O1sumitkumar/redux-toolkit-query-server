import { Task } from '@/interfaces/tasks.interface';
import { Document, Schema, model } from 'mongoose';

const TaskSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: false },
  value: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const TaskModel = model<Task & Document>('Task', TaskSchema);
