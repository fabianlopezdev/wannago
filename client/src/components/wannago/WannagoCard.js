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
    <article className='card-container'>
      <aside className='date-aside'>
        <h2>
          <strong>{dateTime.day}</strong>
        </h2>
        <h4>{dateTime.month}</h4>
      </aside>
      <section className='info-and-options-container'>
        <div className='info-container'>
          <div>
            <h2 className='title'>{wannago.what}</h2>
          </div>
          <div className='info'>
            <p class='text'>
              <strong>On</strong> {dateTime.wannaGoFormat}
            </p>
            <p class='text'>
              <strong>At </strong>
              {dateTime.time}
            </p>
            <p class='text'>
              <strong>At </strong>
              {wannago.where}
            </p>
          </div>
        </div>
        <>
          <div className='options-container'>
            <div className='options'>
              <div className='clickable'>
                <IoShareOutline
                  size={25}
                  title='Share WannaGo'
                  onClick={() => setShowShareModal(true)}
                />
              </div>

              <div
                className='clickable'
                onClick={onClickDealDelete}
              >
                <IoTrashOutline
                  size={25}
                  title='Delete WannaGo'
                />
              </div>

              {isWannagoStatsPage || (
                <div className='clickable'>
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
              className='share-modal'
            >
              <ShareOptions wannago={wannago} />
            </div>
          )}
          {showDeleteModal && (
            <div
              ref={deleteRef}
              className='share-modal'
            >
              <DeleteOption _id={wannago._id} />
            </div>
          )}
        </>
      </section>
    </article>
  );
};

export default WannaGoCard;




