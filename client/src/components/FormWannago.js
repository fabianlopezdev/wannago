import { What, When, Where, Owner } from './FieldsWannaGo';
import { getWannaGos, postAwannaGo } from '../utils/apiServices';

const WannaGoForm = () => {
  const handleSubmit = (e) => {
    console.log(`I am entering here`);
    e.preventDefault();

    const newWannaGo = {
      what: e.target.what.value,
      when: e.target.when.value,
      where: e.target.where.value,
      owner: e.target.owner.value,
    };

    postAwannaGo(newWannaGo);

    e.target.what.value = '';
    e.target.when.value = '';
    e.target.where.value = '';
    e.target.owner.value = '';
  };
  return (
    <form onSubmit={handleSubmit}>
      <What></What>
      <br />
      <Where></Where>
      <br />
      <When></When>
      <br />
      <Owner></Owner>
      <br />
      <button type='submit'></button>
    </form>
  );
};

export default WannaGoForm;

