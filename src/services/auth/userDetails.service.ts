import { HttpException } from '@/exceptions/httpException';
import { User, UsersDetails } from '@/interfaces/users.interface';
import { UserDetailsModel } from '@/models/auth/userDetails.modal';
import { UserModel } from '@/models/users.model';
import { Service } from 'typedi';

@Service()
export class UsersDetailsService {
  public async createUsersDetails(userDetailsData: UsersDetails): Promise<UsersDetails> {
    const findUser: User = await UserModel.findOne({ email: userDetailsData.email });
    console.log('=======>>>', findUser);
    if (!findUser) throw new HttpException(409, `This email ${userDetailsData.email} already exists`);
    const userDetails = await UserDetailsModel.create(userDetailsData);
    return userDetails;
  }
}
