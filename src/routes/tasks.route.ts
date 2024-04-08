import { Router } from 'express';
import { TaskController } from '@/controllers/tasks.controller';
import { CreateTaskDto } from '@/dtos/task.dto';
import { Routes } from '@/interfaces/routes.interface';
import { AuthMiddleware } from '@/middlewares/auth.middleware';
import { ValidationMiddleware } from '@/middlewares/validation.middleware';

export class TaskRoute implements Routes {
  public path = '/tasks';
  public router = Router();
  public task = new TaskController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, AuthMiddleware, this.task.getTask);
    this.router.put(`${this.path}`, AuthMiddleware, ValidationMiddleware(CreateTaskDto, true), this.task.updateTask);
    this.router.delete(`${this.path}`, AuthMiddleware, this.task.deleteTask);
    this.router.post(`${this.path}`, AuthMiddleware, ValidationMiddleware(CreateTaskDto, true), this.task.createTask);
  }
}
