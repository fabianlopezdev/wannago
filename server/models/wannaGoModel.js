const mongoose = require('./index');
const Schema = mongoose.Schema;

const WannaGoSchema = new Schema({
  what: { type: String, required: true },
  where: { type: String, required: true },
  when: { type: String, required: true },
  dateCreated: { type: String, required: true },
  hostId: { type: String, required: true },
  hostName: { type: String, required: true },
  link: { type: String, required: true },
  clickCount: { type: Number, default: 0 },
  rejectionsCount: { type: Number, default: 0 },
  attendeesCount: { type: Number, default: 0 },
  suggestionsCount: { type: Number, default: 0 },
  attendees: { type: Map, of: String },
  suggestions: { type: Map, of: String },
});

module.exports = mongoose.model('wannagos', WannaGoSchema);








