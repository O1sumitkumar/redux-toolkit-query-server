import { Task } from '@/interfaces/tasks.interface';
import { TaskService } from '@/services/tasks.service';
import { Request, Response, NextFunction } from 'express';
import Container from 'typedi';

export class TaskController {
  public task = Container.get(TaskService);

  public getTask = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.body;
    try {
      const findAllTasksData: Task[] = await this.task.getAllTask(userId);

      res.status(200).json({ data: findAllTasksData, message: 'Get all task successfully' });
    } catch (error) {
      next(error);
    }
  };

  public createTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const taskData: Task = req.body;
      const createTaskData: Task = await this.task.createTask(taskData);
      res.status(201).json({ data: createTaskData, message: 'task created' });
    } catch (error) {
      next(error);
    }
  };

  public updateTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const taskToBeUpdate: Task = req.body;
      const updatedTask: Task = await this.task.updateTask(taskToBeUpdate);
      res.status(200).json({ data: updatedTask, message: 'Task updated successfully' });
    } catch (error) {
      next(error);
    }
  };

  public deleteTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { _id } = req.body;
      const delResponse = await this.task.deleteTask(_id);
      res.status(200).json({ data: delResponse, message: 'Task deleted successfully' });
    } catch (error) {
      next(error);
    }
  };
}
