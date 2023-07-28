//Internal dependencies
const WannaGo = require('../../models/wannaGoModel');

const deleteWannago = async (ctx) => {
try {
  const { _id } = ctx.request.body;
  console.log('ctxxx', ctx);
  console.log('this is id', _id);
  const deletedWannaGo = await WannaGo.findByIdAndRemove(_id);
  console.log(`The WannaGo: ${deletedWannaGo} was deleted`)
  ctx.status =201;
  ctx.body = deletedWannaGo
} catch (e) {
    console.log(`Error in deleteWannaGO function from controllers: ${e}`);
  
}
}

module.exports = {deleteWannago};

