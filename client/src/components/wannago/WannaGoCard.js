//Internal dependencies
import { dateFormatter, guestLinkGenerator } from '../../utils/helperFunctions';
import './WannaGoCard.css';
import {
  IoTrashOutline,
  IoShareOutline,
  IoArrowRedoOutline,
} from 'react-icons/io5';
import { deleteWannaGo } from '../../utils/apis/wannagoApiServices/deleteWannaGos';
import { CLIENT_PORT, URL } from '../../utils/config';
import { useMutation, useQueryClient } from 'react-query';
import { useState } from 'react';
import SocialButtons from './SocialButtons';
import useOnclickOutside from 'react-cool-onclickoutside';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
const WannaGoCard = ({ wannaGo, userName }) => {
  const [showShare, setShowShare] = useState(false);
  const { currentUser } = useAuth();

  const location = useLocation();
  const guest = location.pathname.split('/')[2];
  const [showDelete, setShowDelete] = useState(false);
  const dateTime = dateFormatter(wannaGo.when);
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteWannaGo, {
    onSuccess: () => {
      // queryClient.getQueryData(['wannagos'], (prevWannagos) => {
      //   console.log('previousWannagos',prevWannagos)
      //   // prevWannagos.splice(prevWannagos.indexOf(wgToDelete), 1);
      // });
      queryClient.invalidateQueries('wannagos');
    },
  });

  const onClickDealDelete = () => {
    setShowDelete(true);
  };
  const guestLink = guestLinkGenerator(wannaGo._id);

  const socialShareRef = useOnclickOutside(() => {
    setShowShare(false);
  });

  const deleteRef = useOnclickOutside(() => {
    setShowDelete(false);
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
              <strong>{wannaGo.what}</strong>
            </h2>
          </div>
          <div className='description'>
            {`${dateTime.time} - ${dateTime.wannaGoFormat}`}
            <div>{wannaGo.where}</div>
          </div>
        </div>
        <>
          {guest !== 'guest-link' && (
            <div className='optionsContainer'>
              <div className='options'>
                {currentUser && (
                  <div className='charts'>
                    <IoShareOutline
                      size={25}
                      title='Share WannaGo'
                      onClick={() => setShowShare(true)}
                    />
                  </div>
                )}
                <div
                  className='charts'
                  onClick={onClickDealDelete}
                >
                  <IoTrashOutline
                    size={25}
                    title='Delete WannaGo'
                  />
                </div>
                {currentUser && (
                  <div className='charts'>
                    <Link
                      to={`wannago-stats/${wannaGo._id}`}
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
          )}
          {showShare && (
            <div
              ref={socialShareRef}
              className='shareModal'
            >
              <SocialButtons
                wannaGoId={wannaGo._id}
                userName={userName}
              />
            </div>
          )}
          {showDelete && (
            <div
              ref={deleteRef}
              className='shareModal'
            >
              <div className='deleteContainer'>
                <h5>Delete wannaGo?</h5>
                <button
                  className='copyButton'
                  onClick={() => mutate(wannaGo._id)}
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

