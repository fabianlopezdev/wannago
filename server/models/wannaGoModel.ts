import mongoose from './index';
const Schema = mongoose.Schema;

export interface IWannaGo {
  what: string,
  where: string,
  when: string,
  owner: string,
  ownerName: string,
  guestLink: string,
  openedTimes: number,
  rejectCounter: number,
  goingCounter: number,
  suggestionBoxCounter: number,
  ppl_going: Map<string,string>,
  suggestion_box: string[],
}


const WannaGoSchema = new Schema({
  what: { type: String, required: true },
  where: { type: String, required: true },
  when: { type: String, required: true },
  owner: String,
  ownerName: String,
  guestLink: String,
  openedTimes: { type: Number, default: 0 },
  rejectCounter: { type: Number, default: 0 },
  goingCounter: {type: Number, default: 0 },
  suggestionBoxCounter: { type: Number, default: 0 },
  ppl_going: { type: Map, of: String },
  suggestion_box: Array,
});

export default mongoose.model('wannagos', WannaGoSchema);


