//External dependencies
import { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import { Alert } from 'bootstrap';
//Internal dependencies
import WannaGoCard from '../components/WannaGoCard';
import { getWannaGoById } from '../utils/apis/wannagoApiServices/getWannaGos';
import { putGuestLink } from '../utils/apis/wannagoApiServices/putWannaGos';
import { CLIENT_PORT, URL } from '../utils/config';
import { putOwnerToWannaGo } from '../utils/apis/userApiServices/userApi';
import { useAuth } from '../contexts/AuthContext';
import '../components/WannaGoCard.css';

const PlanCreated = () => {
  const { id } = useParams();
  const guestLink = `${URL}${CLIENT_PORT}/wannago/guest-link/${id}`;
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { data, isError, isLoading } = useQuery(
    'createdWG',
    () => getWannaGoById(id),
    {
      onSuccess: (data) => {
        console.log('Success, and now posting');
        putGuestLink(data._id, guestLink);
        if (currentUser?.uid) putOwnerToWannaGo(data._id, currentUser.uid);
      },
      refetchOnMount: false, 
    }
  );
  const [copied, setCopied] = useState('Copy');

  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return (
      <Alert variant='danger'>
        Sorry we could not load the page. The link may be broken
      </Alert>
    );

  const onClickCopyLink = () => {
    navigator.clipboard.writeText(guestLink);
    setCopied('Copied');
  };

  return (
    <>
      <h1 className='justCreatedWannaGo'>What a Plan!</h1>
      <WannaGoCard wannaGo={data} />
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
        {!currentUser && (
          <h6 className='highlight'>
            WannaSee who wannaGo?:
            <Link to='/user/login'> log in </Link> or
            <Link to='/user/signup'> sign up </Link>
          </h6>
        )}
      </div>
    </>
  );
};

export default PlanCreated;

