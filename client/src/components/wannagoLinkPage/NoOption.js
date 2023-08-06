//Internal dependencies
import { putIncrementRejectionsCount } from '../../utils/apis/wannagoApiServices/putWannagos';

const NoOption = ({ id, rejectionsCount, hostName, hostId }) => {
  putIncrementRejectionsCount(id, ++rejectionsCount, hostId)
  return <h3 style={{marginLeft: '1rem', marginRight: '1rem'}}> {hostName} will miss you!</h3>;
};

export default NoOption;

