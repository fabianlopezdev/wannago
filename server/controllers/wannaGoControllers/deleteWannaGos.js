//Internal dependencies
const Wannago = require('../../models/wannaGoModel');

const deleteWannago = async (ctx) => {
try {
  const { _id } = ctx.request.body;
  const { authorization } = ctx.request.header;
  const wannago = await Wannago.findByIdAndRemove(_id);
  console.log(`The wannago: ${wannago} was deleted`)
  ctx.status =201;
  ctx.body = wannago
} catch (e) {
    console.log(`Error in deleteWannago function from controllers: ${e}`);
  
}
}

module.exports = {deleteWannago};

