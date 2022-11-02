//External dependencies
import { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { Alert } from 'bootstrap';
//Internal dependencies
import WannaGoCard from '../components/WannaGoCard';
import { getWannaGoById } from '../utils/apis/wannagoApiServices/getWannaGos';
import { putGuestLink } from '../utils/apis/wannagoApiServices/putWannaGos';
import { CLIENT_PORT, URL } from '../utils/config';
import { putOwnerToWannaGo } from '../utils/apis/userApiServices/userApi';
import { useAuth } from '../contexts/AuthContext';
import {guestLinkGenerator} from '../utils/helperFunctions'

import '../components/WannaGoCard.css';
import './CreatedWannaGoPage.css';

import SocialButtons from '../components/SocialButtons';

const PlanCreated = () => {
  const { id } = useParams();
  // const guestLink = guestLinkGenerator(id);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { data, isError, isLoading } = useQuery(
    'createdWG',
    () => getWannaGoById(id),
    {
      onSuccess: (data) => {
        console.log('Success, and now posting');
        // putGuestLink(data._id, guestLink);
        if (currentUser?.uid) putOwnerToWannaGo(data._id, currentUser.uid);
      },
      refetchOnMount: false,
    }
  );

  // const queryClient = useQueryClient();

  // currentUser && const {name} = queryClient.getQueryData('user');

  // console.log('this is datar', datar)
 

  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return (
      <Alert variant='danger'>
        Sorry we could not load the page. The link may be broken
      </Alert>
    );



  return (
    <>
      <div className='justCreatedWannaGo'>
        <h1>{data.ownerName},</h1>
        <h1>What a Plan!</h1>
        <WannaGoCard wannaGo={data} />
        <div className='secondPart'>
          {!currentUser ? (
            <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
              <h2>Get your plans engaged!</h2>
              <p>
                Share the wannaGo with friends and family and see who can go:
                <Link to='/user/login'> Log in </Link> or
                <Link to='/user/signup'> sign up </Link>
              </p>
            </div>
          ) : (
            <SocialButtons wannaGoId={data._id} />
          )}
        </div>
      </div>
    </>
  );
};

export default PlanCreated;







