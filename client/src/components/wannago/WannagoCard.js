//Internal dependencies
import { dateFormatter } from '../../utils/helperFunctions';
import {
  IoTrashOutline,
  IoShareOutline,
  IoArrowRedoOutline,
} from 'react-icons/io5';
import { useState } from 'react';
import ShareOptions from './ShareOptions';
import useOnclickOutside from 'react-cool-onclickoutside';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';

import './wannagoCard.css';
import DeleteOption from './DeleteOption';

const WannaGoCard = ({ wannago }) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const location = useLocation();
  const isWannagoStatsPage = location.pathname === '/wannago-stats';
  const dateTime = dateFormatter(wannago.when);

  console.log('wannagooooo', wannago)

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
              <ShareOptions wannago={wannago} />
            </div>
          )}
          {showDeleteModal && (
            <div
              ref={deleteRef}
              className='shareModal'
            >
              <DeleteOption _id={wannago._id}/>
              </div>
          )}
        </>
      </div>
    </div>
  );
};

export default WannaGoCard;

