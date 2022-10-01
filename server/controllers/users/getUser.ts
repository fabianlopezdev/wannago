import { Context } from 'koa';
// const User = require('../../models/userModel');
import User from '../../models/userModel';

const getUserById = async (ctx: Context) => {
  try {
    ctx.status = 201;
    // tslint:disable-next-line:no-console
    console.log(ctx.params.id);
    const user = await User.findById(ctx.params.id);
    // tslint:disable-next-line:no-console
    console.log(`This user was retrieved ${user}`);
    ctx.body = user;
  } catch (e) {
    ctx.status = 500;
    // tslint:disable-next-line:no-console
    console.log(`Error in getUserById function from controllers: ${e}`);
  }
};

export default getUserById;
