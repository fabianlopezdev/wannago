//Internal dependencies
import { dateFormatter } from '../../utils/helperFunctions';
import './wannagoCard.css';
import {
  IoTrashOutline,
  IoShareOutline,
  IoArrowRedoOutline,
} from 'react-icons/io5';
import { deleteWannago } from '../../utils/apis/wannagoApiServices/deleteWannaGos';
import { useMutation, useQueryClient } from 'react-query';
import { useState } from 'react';
import SocialButtons from './SocialButtons';
import useOnclickOutside from 'react-cool-onclickoutside';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const WannaGoCard = ({ wannago }) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const location = useLocation();
  const isWannagoStatsPage = location.pathname === '/wannago-stats';
  const dateTime = dateFormatter(wannago.when);

  const queryClient = useQueryClient();

  const { mutate } = useMutation(deleteWannago, {
    onSuccess: (wannagoToDelete) => {
      queryClient.getQueryData(['wannagos'], (previousWannagos) => {
        console.log('previousWannagos', previousWannagos);
        previousWannagos.splice(previousWannagos.indexOf(wannagoToDelete), 1);
      });
      queryClient.invalidateQueries('wannagos');
    },
  });

  const onClickDealDelete = () => {
    setShowDeleteModal(true);
  };

  const socialShareRef = useOnclickOutside(() => {
    setShowShareModal(false);
  });

  const deleteRef = useOnclickOutside(() => {
    setShowDeleteModal(false);
  });

  return (
    <div className='wgCardContainer'>
      <div className='wgWhen'>
        <h2>
          <strong>{dateTime.day}</strong>
        </h2>
        <h4>{dateTime.month}</h4>
      </div>
      <div className='wgDescription'>
        <div className='wannaGoCardInfoContainer'>
          <div>
            <h2 className='title'>
              <strong>{wannago.what}</strong>
            </h2>
          </div>
          <div className='description'>
            {`${dateTime.time} - ${dateTime.wannaGoFormat}`}
            <div>{wannago.where}</div>
          </div>
        </div>
        <>
          <div className='optionsContainer'>
            <div className='options'>
              <div className='charts'>
                <IoShareOutline
                  size={25}
                  title='Share WannaGo'
                  onClick={() => setShowShareModal(true)}
                />
              </div>

              <div
                className='charts'
                onClick={onClickDealDelete}
              >
                <IoTrashOutline
                  size={25}
                  title='Delete WannaGo'
                />
              </div>

              {isWannagoStatsPage || (
                <div className='charts'>
                  <Link
                    to={`/wannago-stats`}
                    state={{ data: wannago }}
                    style={{ color: 'inherit', textDecoration: 'inherit' }}
                  >
                    <IoArrowRedoOutline
                      size={25}
                      title='Wannago Details'
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>

          {showShareModal && (
            <div
              ref={socialShareRef}
              className='shareModal'
            >
              <SocialButtons wannago={wannago} />
            </div>
          )}
          {showDeleteModal && (
            <div
              ref={deleteRef}
              className='shareModal'
            >
              <div className='deleteContainer'>
                <h5>Delete wannago?</h5>
                <button
                  className='copyButton'
                  onClick={() => mutate(wannago._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default WannaGoCard;

