import { UsersDetailsController } from '@/controllers/auth/usersDetails.controller';
import { AuthMiddleware } from '@/middlewares/auth.middleware';
import { Router } from 'express';

export class UsersDetailsRoute {
  public path = '/users-details';
  public router = Router();
  public usersDetails = new UsersDetailsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, AuthMiddleware, this.usersDetails.createUsersDetails);
  }
}
