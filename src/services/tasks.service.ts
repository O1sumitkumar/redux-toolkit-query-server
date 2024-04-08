import { HttpException } from '@/exceptions/httpException';
import { Task } from '@/interfaces/tasks.interface';
import { TaskModel } from '@/models/tasks.model';
import { Service } from 'typedi';

@Service()
export class TaskService {
  public async createTask(task: Task): Promise<Task> {
    const createTask = await TaskModel.create({
      ...task,
    });
    return createTask;
  }

  public async getAllTask(userId: string): Promise<Task[]> {
    const findTasks: Task[] = await TaskModel.find({ userId });
    if (findTasks.length === 0) throw new HttpException(409, 'No tasks found for this user');

    return findTasks;
  }

  public async updateTask(task: Task): Promise<Task> {
    const updateTask = await TaskModel.findByIdAndUpdate(task._id, task, { new: true });
    if (!updateTask) throw new HttpException(409, 'Task not found');

    return updateTask;
  }

  public async deleteTask(taskId: string): Promise<Task> {
    const deletedTask: Task = await TaskModel.findByIdAndDelete(taskId);
    if (!deletedTask) throw new HttpException(409, 'Task not found');

    return deletedTask;
  }
}
