// Internal dependencies
import WannaGo from '../../models/wannaGoModel';
import { Context } from 'koa';

const deleteWannaGo = async (ctx: Context) => {
try {
  const { id } = ctx.request.body;
  const deletedWannaGo = await WannaGo.findByIdAndRemove(id);
  // tslint:disable-next-line:no-console
  console.log(`The WannaGo: ${deletedWannaGo} was deleted`)
  ctx.status =201;
  ctx.body = deletedWannaGo
} catch (e) {
  // tslint:disable-next-line:no-console
  console.log(`Error in deleteWannaGO function from controllers: ${e}`);
  }
}

export default deleteWannaGo;

