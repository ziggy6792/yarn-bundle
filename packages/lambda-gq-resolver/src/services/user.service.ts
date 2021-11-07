import { User, UserModel } from 'src/entities/user.entity';
import { Service } from 'typedi';
import BaseEntityService from './base-entity.service';

@Service()
export class UserService extends BaseEntityService<User> {
  constructor(private userModel = UserModel) {
    super(userModel);
  }
}
