const mongoose = require('./index');
const Schema = mongoose.Schema;

const WannaGoSchema = new Schema({
  what: { type: String, required: true },
  where: { type: String, required: true },
  when: { type: String, required: true },
  owner: String,
  ownerName: String,
  openedTimes: { type: Number, default: 0 },
  rejectCounter: { type: Number, default: 0 },
  goingCounter: {type: Number, default: 0 },
  suggestionBoxCounter: { type: Number, default: 0 },
  ppl_going: { type: Map, of: String },
  suggestion_box: Array,
});

module.exports = mongoose.model('wannagos', WannaGoSchema);


