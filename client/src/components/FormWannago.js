import { What, When, Where, Owner } from './FieldsWannaGo';
import { postAwannaGo } from '../utils/apis/wannagoApiServices/postWannaGos';
import VerticalStepper from './VerticalStepper';

const WannaGoForm = () => {
  const handleSubmit = (e) => {
    console.log(`I am entering here`);
    e.preventDefault();
    console.log('THis is e', e);

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
      {/* <VerticalStepper></VerticalStepper> */}
      <button type='submit'></button>
    </form>
  );
};

export default WannaGoForm;


