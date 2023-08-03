//Internal dependencies
const { now } = require('mongoose');
const Wannago = require('../../models/wannaGoModel');

const postWannago = async (ctx) => {
  try {
    const wannago = ctx.request.body;
    const userToken = ctx.request.header.authorization;
    console.log('userToken', userToken)
    const storedWannago = await WannaGo.create({
      what: Wannago.what,
      where: Wannago.where,
      when: Wannago.when,
      hostId: Wannago.hostId,
      hostName: Wannago.hostName,
      dateCreated: Wannago.dateCreated,
      guestLink: Wannago.link,
    });
    console.log(`This wannago was posted: ${storedWannago}`);
    ctx.status = 201;
    ctx.body = storedWannago;
  } catch (e) {
    ctx.status = 500;
    ctx.body = e;
    console.log(`Error in postAwannaGo function from controllers: ${e}`);
  }
};






module.exports = {postWannago};



