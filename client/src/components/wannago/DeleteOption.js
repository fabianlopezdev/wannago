import { useMutation, useQueryClient } from 'react-query';
import { deleteWannago } from '../../utils/apis/wannagoApiServices/deleteWannagos';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
export default function DeleteOption(_id) {
  const { userToken } = useAuth();

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    ([_id, userToken]) => deleteWannago(_id, userToken),
    {
      onSuccess: (wannagoToDelete) => {
        queryClient.getQueryData(['wannagos'], (previousWannagos) => {
          previousWannagos.splice(previousWannagos.indexOf(wannagoToDelete), 1);
        });
        queryClient.invalidateQueries('wannagos');
        navigate('/dashboard');
      },
    }
  );

  return (
    <div className='deleteContainer'>
      <h5>Delete wannago?</h5>
      <button
        className='copyButton'
        onClick={() => mutate([_id, userToken])}
      >
        Delete
      </button>
    </div>
  );
}

