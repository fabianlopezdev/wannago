//Internal dependencies
const WannaGo = require('../../models/wannaGoModel');

const getWannaGos = async (ctx) => {
  try {
    const wannagos = await WannaGo.find({});
    ctx.status = 201;
    ctx.body = wannagos;
    console.log(`These wannagos were retrieved: ${wannagos}`);
  } catch (e) {
    ctx.status = 500;
    console.log(`Error in getWannaGos function from controllers: ${e}`);
  }
};

const getUserWannagos = async (ctx) => {
  try {
    console.log('params are:', ctx.params)
    const wannagos = await WannaGo.find({ hostId: ctx.params.hostId});
    ctx.status = 201;
    ctx.body = wannagos;
    // console.log(`The owner: ${ctx.params.hostId} owns these wannagos: ${wannagos}`);
  } catch (e) {
    ctx.status = 500;
    console.log(`Error in getWannaGos function from controllers: ${e}`);
  }
};

const getWannaGoByParams = async (ctx) => {
  try {
    ctx.status = 201;
    const wannaGo = await WannaGo.findOne({
      what: `${ctx.params.what}`,
      when: `${ctx.params.when}`,
    });
    console.log(`This wannaGo was retrieved ${wannaGo}`);
    ctx.body = wannaGo;
  } catch (e) {
    ctx.status = 500;
    console.log(`Error in getawannaGo function from controllers: ${e}`);
  }
};

const getWannagoByDateCreated = async (ctx) => {
  try {
    ctx.status = 201;
    const wannaGo = await WannaGo.findOne({
      dateCreated: `${ctx.params.dateCreated}`
    });
    console.log(`This wannaGo was retrieved ${wannaGo}`);
    ctx.body = wannaGo;
  } catch (e) {
    ctx.status = 500;
    console.log(`Error in getWannagoByDateCreated function from controllers: ${e}`);
  }
};


const getWannaGoById = async (ctx) => {
  try {
    ctx.status = 201;
    console.log(ctx.params.id);
    const wannaGo = await WannaGo.findById(ctx.params.id);
    console.log(`This wannaGo was retrieved ${wannaGo}`);
    ctx.body = wannaGo;
  } catch (e) {
    ctx.status = 500;
    console.log(`Error in getawannaGo function from controllers: ${e}`);
  }
};

module.exports = {
  getWannaGos,
  getWannaGoByParams,
  getWannaGoById,
  getUserWannagos,
  getWannagoByDateCreated,
};





