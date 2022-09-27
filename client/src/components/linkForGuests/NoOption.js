//Internal dependencies
import { putRejectCounter } from '../../utils/apis/wannagoApiServices/putWannaGos';

const NoOption = ({ id, rejectCounter, ownerName }) => {
  console.log(rejectCounter)
  putRejectCounter(id, ++rejectCounter)
  return <h1>We'll let know {ownerName} that you can't go. People will miss you!</h1>;
};

export default NoOption;

