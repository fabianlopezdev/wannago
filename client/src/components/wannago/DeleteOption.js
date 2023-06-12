import { useMutation, useQueryClient } from 'react-query';
import { deleteWannago } from '../../utils/apis/wannagoApiServices/deleteWannaGos';
import { useNavigate } from 'react-router-dom';

export default function DeleteOption(_id) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  console.log('wannagoID', _id);
  const { mutate } = useMutation(deleteWannago, {
    onSuccess: (wannagoToDelete) => {
      queryClient.getQueryData(['wannagos'], (previousWannagos) => {
        previousWannagos.splice(previousWannagos.indexOf(wannagoToDelete), 1);
      });
      queryClient.invalidateQueries('wannagos');
      navigate('/dashboard');
    },
  });


  return (
    <div className='deleteContainer'>
      <h5>Delete wannago?</h5>
      <button
        className='copyButton'
        onClick={() => mutate(_id)}
      >
        Delete
      </button>
    </div>
  );
}



