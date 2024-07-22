import { CustomRequest, User, UsersDetails } from '@/interfaces/users.interface';
import { UsersDetailsService } from '@/services/auth/userDetails.service';
import { UserService } from '@/services/users.service';
import { formatValidationErrors } from '@/utils/helper';
import { NextFunction, Response } from 'express';
import Container from 'typedi';

export class UsersDetailsController {
  public usersDetails = Container.get(UsersDetailsService);
  public user = Container.get(UserService);

  public createUsersDetails = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const userData: UsersDetails = req.body;
      const userId: string = req.user._id;
      const findOneUserData: User = await this.user.findUserById(userId);
      const userDetailsData: UsersDetails = {
        ...userData,
        userId: findOneUserData._id,
        email: findOneUserData.email,
      };

      await this.usersDetails.createUsersDetails(userDetailsData);

      res.status(201).json({ data: userDetailsData, message: 'user details added successfully' });
    } catch (error) {
      if (error.name === 'ValidationError') {
        const formattedErrors = formatValidationErrors(error);
        res.status(400).json({ message: `UsersDetails validation failed: ${formattedErrors}` });
      } else {
        next(error);
      }
    }
  };
}
