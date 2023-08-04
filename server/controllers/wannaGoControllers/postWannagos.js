//Internal dependencies
const { now } = require('mongoose');
const Wannago = require('../../models/wannagoModel');

const postWannago = async (ctx) => {
  try {
    const wannago = ctx.request.body;
    const userToken = ctx.request.header.authorization;
    console.log('wannago', wannago);
    const storedWannago = await Wannago.create({
      what: wannago.what,
      where: wannago.where,
      when: wannago.when,
      hostId: wannago.hostId,
      hostName: wannago.hostName,
      dateCreated: wannago.dateCreated,
      link: wannago.link,
    });
    console.log(`This wannago was posted: ${storedWannago}`);
    ctx.status = 201;
    ctx.body = storedWannago;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in postWannago function from controllers: ${e}`);
  }
};

module.exports = { postWannago };

