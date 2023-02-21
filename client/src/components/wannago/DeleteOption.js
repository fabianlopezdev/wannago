import { useMutation, useQueryClient } from 'react-query';
import { deleteWannago } from '../../utils/apis/wannagoApiServices/deleteWannaGos';

export default function DeleteOption(wannagoId) {
  const queryClient = useQueryClient();
  console.log('wannagoID', wannagoId)
  const { mutate } = useMutation(deleteWannago, {
    onSuccess: (wannagoToDelete) => {
      queryClient.getQueryData(['wannagos'], (previousWannagos) => {
        previousWannagos.splice(previousWannagos.indexOf(wannagoToDelete), 1);
      });
      console.log('deleeetteeed')
      queryClient.invalidateQueries('wannagos');
    },
  });


  return (
    <div className='deleteContainer'>
      <h5>Delete wannago?</h5>
      <button
        className='copyButton'
        onClick={() => mutate(wannagoId)}
      >
        Delete
      </button>
    </div>
  );
}
