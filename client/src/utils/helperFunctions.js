import newWannaGo from '../data'

export const wannaGoHandleSubmit = (e, field) => {
  newWannaGo[field] = e.target.field.value;
  
};