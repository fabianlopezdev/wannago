import WannaGo from '../../models/wannaGoModel';
import { Context } from 'koa';


const postAwannaGo = async (ctx: Context) => {
  try {
    const wannaGo = ctx.request.body;
    const storedWannaGo = await WannaGo.create({
      what: wannaGo.what,
      where: wannaGo.where,
      when: wannaGo.when,
      ownerName: wannaGo.ownerName,
    });
    // tslint:disable-next-line:no-console
    console.log(`This wannaGo was posted: ${storedWannaGo}`);
    ctx.status = 201;
    ctx.body = storedWannaGo;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    // tslint:disable-next-line:no-console
    console.log(`Error in postAwannaGo function from controllers: ${e}`);
  }
};

export default postAwannaGo;



