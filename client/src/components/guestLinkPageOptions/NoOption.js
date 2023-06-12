//Internal dependencies
import { putRejectionsCounter } from '../../utils/apis/wannagoApiServices/putWannaGos';

const NoOption = ({ id, rejectCounter, hostName, hostId }) => {
  console.log(rejectCounter)
  putRejectionsCounter(id, ++rejectCounter, hostId)
  return <h3 style={{marginLeft: '1rem', marginRight: '1rem'}}> {hostName} will miss you!</h3>;
};

export default NoOption;

