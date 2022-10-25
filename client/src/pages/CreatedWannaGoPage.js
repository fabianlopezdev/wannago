//External dependencies
import { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

//Internal dependencies
import WannaGoCard from '../components/WannaGoCard';
import { getWannaGoById } from '../utils/apis/wannagoApiServices/getWannaGos';
import { putGuestLink } from '../utils/apis/wannagoApiServices/putWannaGos';
import { CLIENT_PORT, URL } from '../utils/config';
import { putOwnerToWannaGo } from '../utils/apis/userApiServices/userApi';
import '../components/WannaGoCard.css';

const PlanCreated = () => {
  const {id} = useParams();
  const currentUser = useAuth();
  const navigate = useNavigate();
  const [wannaGo, setwannaGo] = useState({});
  const [copied, setCopied] = useState('Copy');

  useEffect(() => {
    promiseHandler();
  }, []);

  const guestLink = `${URL}${CLIENT_PORT}/wannago/guest-link/${id}`;

  const promiseHandler = async () => {
    const queriedWannaGo = await getWannaGoById(id);
    await putGuestLink(id, guestLink);
    console.log('currentUser', currentUser);
    if (currentUser.uid)
      putOwnerToWannaGo(queriedWannaGo._id, currentUser.uid);
      setwannaGo(queriedWannaGo);
  };
  const onClickCopyLink = () => {
    navigator.clipboard.writeText(guestLink);
    setCopied('Copied');
  };
  return (
    <>
      <h1 className='justCreatedWannaGo'>What a Plan!</h1>
      <WannaGoCard wannaGo={wannaGo} />
      <div className='justCreatedWannaGoSedondPart'>
        <h4>Share the link:</h4>
        <div>
          <a
            className='guestLink'
            target='blank'
            href={guestLink}
          >
            {guestLink}
          </a>
          <button
            className='buttonCopy'
            onClick={onClickCopyLink}
          >
            {copied}
          </button>
        </div>
        {!currentUser.currentUser && (<h6 className='highlight'>
              WannaSee who wannaGo?:
              <Link to='/user/login'> log in </Link> or
              <Link to='/user/signup'> sign up </Link>
            </h6>)
            }
      </div>
    </>
  );
};

export default PlanCreated;


