//Internal dependencies
const User = require('../../models/userModel');

const postAuser = async (ctx) => {
  try {
    const user = ctx.request.body;
    const storedUser = await User.create({
      name: user.name,
      email: user.email,
      _id: user._id,
    });
    console.log(`This user was posted: ${storedUser}`);
    ctx.status = 201;
    ctx.body = storedUser;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in postAuser function from controllers postUser: ${e}`);
  }
};

module.exports = { postAuser };
