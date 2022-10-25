const User = require('../../models/userModel');

const getUserById = async (ctx) => {
  try {
    ctx.status = 201;
    const user = await User.findById(ctx.params.id);
    console.log(ctx.params.id);
    console.log(`This user was retrieved ${user}`);
    ctx.body = user;
  } catch (e) {
    ctx.status = 500;
    console.log(`Error in getUserById function from controllers: ${e}`);
  }
};

module.exports = { getUserById };
