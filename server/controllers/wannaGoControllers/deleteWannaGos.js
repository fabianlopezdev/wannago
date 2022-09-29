//Internal dependencies
const WannaGo = require('../../models/wannaGoModel');

const deleteWannaGo = async (ctx) => {
try {
  const { id } = ctx.request.body;
  const deletedWannaGo = await WannaGo.findByIdAndRemove(id);
  console.log(`The WannaGo: ${deletedWannaGo} was deleted`)
  ctx.status =201;
  ctx.body = deletedWannaGo
} catch (e) {
    console.log(`Error in deleteWannaGO function from controllers: ${e}`);
  }
}

module.exports = {deleteWannaGo};

