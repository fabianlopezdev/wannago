//Internal dependencies
import { putRejectCounter } from '../../utils/apis/wannagoApiServices/putWannaGos';

const NoOption = ({ id, rejectCounter, ownerName }) => {
  console.log(rejectCounter)
  putRejectCounter(id, ++rejectCounter)
  return <h3 style={{marginLeft: '1rem', marginRight: '1rem'}}> {ownerName} will miss you!</h3>;
};

export default NoOption;

