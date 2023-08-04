//Internal dependencies
const Wannago = require('../../models/wannagoModel');

// const getWannaGos = async (ctx) => {
//   try {
//     const wannagos = await Wannago.find({});
//     ctx.status = 201;
//     ctx.body = wannagos;
//     console.log(`These wannagos were retrieved: ${wannagos}`);
//   } catch (e) {
//     ctx.status = 500;
//     console.log(`Error in getWannaGos function from controllers: ${e}`);
//   }
// };

const getUserWannagos = async (ctx) => {
  try {
    // console.log('ctxxxx', ctx)
    console.log('params are:', ctx.params);
    const wannagos = await Wannago.find({ hostId: ctx.params.hostId });
    ctx.status = 201;
    ctx.body = wannagos;
    // console.log(`The owner: ${ctx.params.hostId} owns these wannagos: ${wannagos}`);
  } catch (e) {
    ctx.status = 500;
    console.log(`Error in getWannaGos function from controllers: ${e}`);
  }
};

const getWannagoByParams = async (ctx) => {
  try {
    ctx.status = 201;
    const wannago = await Wannago.findOne({
      what: `${ctx.params.what}`,
      when: `${ctx.params.when}`,
    });
    console.log(`This wannago was retrieved ${wannago}`);
    ctx.body = wannago;
  } catch (e) {
    ctx.status = 500;
    console.log(`Error in getawannaGo function from controllers: ${e}`);
  }
};

const getWannagoByDateCreated = async (ctx) => {
  try {
    ctx.status = 201;
    const wannago = await Wannago.findOne({
      dateCreated: `${ctx.params.dateCreated}`,
    });
    console.log(`This wannago was retrieved ${wannago}`);
    ctx.body = wannago;
  } catch (e) {
    ctx.status = 500;
    console.log(
      `Error in getWannagoByDateCreated function from controllers: ${e}`
    );
  }
};

const getWannagoById = async (ctx) => {
  try {
    ctx.status = 201;
    console.log(ctx.params.id);
    const wannago = await Wannago.findById(ctx.params.id);
    console.log(`This wannaGo was retrieved ${wannaGo}`);
    ctx.body = wannaGo;
  } catch (e) {
    ctx.status = 500;
    console.log(`Error in getawannaGo function from controllers: ${e}`);
  }
};

module.exports = {
  // getWannaGos,
  getWannagoByParams,
  getWannagoById,
  getUserWannagos,
  getWannagoByDateCreated,
};

